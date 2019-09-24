import React, { Component } from 'react';
import { API_PREFIX, IMG_URL_PREFIX } from '../services/consts/consts';

//SASS
import styles from '../stylesheets/informationProfileBlock.module.scss';

class InformationProfileBlock extends Component {

  state = {
    showTel: false,
    disabled: false,
  };

  showTel = async (id) => {
    this.setState({
      showTel: true,
      disabled: true
    });
    const resp = await fetch(`${API_PREFIX}/club/statistics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clubId: id }),
    });
  };

  render() {
    const { club, game } = this.props;
    if (!!club) {
      const clubTel = club.tel[0].replace(/ /g, '-');
      return (
        <div className={styles.profileInformations}>
          <img src={IMG_URL_PREFIX + club.cover}
               width="360"
               height="202"
               alt={club.name}/>
          <div className="profile-club-informations">
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
                   disabled={this.state.disabled}
                   onClick={() => this.showTel(club._id)}
                   value="Показать телефон"/>
          </div>
        </div>
      )
    }
    if (!!game) {
      return (
        <div className={styles.profileInformations}>
          <img src={game.cover} // Поставить условие показа в зависимости от screenMode
               width="360"
               height="202"
               alt={game.name}/>
          <div className="profile-game-informations">
            <p>
              <span>{game.name}</span> - {game.short_description}<br/>
              <span>Жанр:</span> {game.genre}<br/>
              <span>Платформа:</span> {game.platform}<br/>
              <span>Язык:</span> {game.language}<br/>
              <span>Количество игроков:</span> {game.playersNum}<br/>
            </p>
          </div>
        </div>
      )
    }
  }
}

export default InformationProfileBlock;