import React, { Component } from 'react';
import { API_PREFIX, IMG_URL_PREFIX } from '../services/consts/consts';

//SASS
import styles from '../stylesheets/informationProfileBlock.module.scss';

class InformationProfileBlock extends Component {

  state = {
    showTel: false,
  };

  showTel = async (id) => {
    this.setState({ showTel: true });
    console.log('API_PREFIX', API_PREFIX);
    const resp = await fetch(`${API_PREFIX}/club/statistics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clubId: id }),
    });
  };

  render() {
    const { club, isClub, isGame } = this.props;
    const clubTel = club.tel[0].replace(/ /g, '-');
    if (isClub)
      return (
      <div className={styles.profileInformations}>
        <img src={IMG_URL_PREFIX + club.cover}
             width="360"
             height="202"
             alt={club.name}/>
        <div className="profile-game-informations">
          <p>
            <span>Адрес: </span>{club.address}<br/>
            <span>Метро: </span>{club.metro[0]}<br/>
            <span>Время работы: </span>{club.workTime.weekdays}<br/>
            {/*<span>Количество шлемов: </span>6 шт.<br></br>*/}
            <span>Стоимость 30 мин: </span>от {club.price[0]} ₽<br/>
            {this.state.showTel && <><span>Телефон: </span>
              <a href={'tel:' + clubTel}>{club.tel[0]}</a></>}
          </p>
          <input className={styles.button}
                 type="button"
                 onClick={() => this.showTel(club._id)}
                 value="Показать телефон"/>
          {/* <ul className={styles.tags}>
					<li><a href="#">Action</a></li>
					<li><a href="#">Научная фантастика</a></li>
					<li><a href="#">Для одного игрока</a></li>
					<li><a href="#">Атмосфера</a></li>
					<li><a href="#">Черный юмор</a></li>
					<li><a href="#">Приключения</a></li>
					<li><a href="#">Еще</a></li>
				</ul> */}
        </div>
      </div>
    );
    if(isGame){}
  }
}

export default InformationProfileBlock;