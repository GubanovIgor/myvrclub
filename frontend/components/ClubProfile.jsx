import React, { Component } from 'react';

//SASS
import styles from '../stylesheets/clubProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';
import { API_PREFIX, IMG_URL_PREFIX } from '../services/consts/consts';

class ClubProfile extends Component {

  state = {
    showTel: false,
  };

  showTel = async (id) => {
    this.setState({showTel: true});
    console.log('API_PREFIX', API_PREFIX);
    const resp = await fetch(`${API_PREFIX}/club/statistics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({clubId: id}),
    });
  };

  render() {
    const {club} = this.props;
    const clubTel = club.tel[0].replace(/ /g, '-');
    console.log(club.tel);
    return (
      <section className={styles.container}>
      <div className={styles.profileTitle}>
        <h2>{club.name}</h2>
      </div>
      <div className={styles.profileContent}>
        <ImageProfileBlock club={club} isClub={true} isGame={false}/>
        <div className={styles.profileInformations}>
          <img src={IMG_URL_PREFIX + club.cover} width="360" height="202" alt={club.name}/>
          <p>
            <span>Адрес: </span>{club.address}<br/>
            <span>Метро: </span>{club.metro[0]}<br/>
            <span>Время работы: </span>{club.workTime.weekdays}<br/>
            {/*<span>Количество шлемов: </span>6 шт.<br></br>*/}
            <span>Стоимость 30 мин: </span>от {club.price[0]} ₽<br/>
            {this.state.showTel && <><span>Телефон: </span>
              <a href={'tel:' + clubTel}>{club.tel[0]}</a></> }
          </p>
          <input className={styles.button}
                 type="button"
                 onClick={() => this.showTel(club._id)}
                 value="Показать телефон"/>
        </div>
      </div>
    </section>
  )
  }
}

export default ClubProfile;
