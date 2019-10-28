import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_PREFIX, IMG_URL_PREFIX } from '../services/consts/consts';
import FeedbackForm from './FeedbackForm';
import { ShowTelButton } from '../stylesheets/index';

//SASS
import styles from '../stylesheets/informationProfileBlock.module.scss';
import social from '../stylesheets/socialIcons-module.scss';

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
          {(this.props.screenMode === 'desktop') &&
            <img className={styles.cover}
              src={IMG_URL_PREFIX + club.cover}
              width="360"
              alt={club.name} />
          }
          <div className={styles.profileInformations}>
            <p>
              <span>Адрес: </span>{club.address}<br/>
              <span>Метро: </span>{club.metro[0]}<br/>
              <span>Время работы: </span>{club.workTime.join(', ')}<br/>
              {/*<span>Количество шлемов: </span>6 шт.<br></br>*/}
              <span>Стоимость 30 мин: </span>от {club.price[0]} ₽<br/>
              <span>Оборудование: </span>{club.equipment.join(', ')}<br/>
              {/*<div>*/}
                {/*{club.socialLinks.fb && <a href={club.socialLinks.fb} className={social.fb}/>}*/}
                {/*{club.socialLinks.instagram && <a href={club.socialLinks.instagram} className={social.instagram}/>}*/}
                {/*{club.socialLinks.vk && <a href={club.socialLinks.vk} className={social.vk}/>} <br/>*/}
              {/*</div>*/}
              {this.state.showTel && <><span>Телефон: </span>
                <a href={'tel:' + clubTel}>{club.tel[0]}</a></>}
            </p>
            <ShowTelButton 
                   disabled={this.state.disabled}
                   onClick={() => this.showTel(club._id)}
                   showTel={this.state.showTel}>
                    Показать телефон
            </ShowTelButton>
          </div>
          <FeedbackForm/>
        </div>
      )
    }
    if (!!game) {
      return (
        <div className={styles.profileInformations}>
          {(this.props.screenMode === 'desktop') &&
            <img className={styles.cover}
              src={game.cover}
              width="360"
              alt={game.name} />
          }
          <div className="profile-game-informations">
            <p>
              <span>{game.name}</span> - {game.short_description}<br/>
              <br/>
              <span>Жанр:</span> {game.genre.join(', ')}<br/>
              <span>Разработчик:</span> {game.developer.join(', ')}<br/>
              <span>Язык:</span> {game.language}<br/>
              {/*<span>Количество игроков:</span> {game.playersNum}<br/>*/}
            </p>
          </div>
          <FeedbackForm/>
        </div>
      )
    }
  }
}

const mapStateToProps = (store) => {
  return {
    screenMode: store.screenMode,
  };
};

export default connect(mapStateToProps)(InformationProfileBlock);