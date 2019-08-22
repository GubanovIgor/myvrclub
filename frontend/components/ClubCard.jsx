import React, { Component } from 'react';

// SASS
import styles from '../main.module.scss';
import clubCardStyles from '../ClubCard.module.scss';

class ClubCard extends Component {
  render() {
    let backgroundImage = {
      backgroundImage: 'url(' + '/static/img/unreal-place.png' + ')',
    };
    return (
      <div className={styles.clubList}>
        <div className={styles.profileNew}>
          <a href="#">
            <div className={styles.profileCover} style={backgroundImage}>
            </div>
            <div className={styles.clubTop}>
              <img src="/static/img/price.jpg" title="Минимальная стоимость 1-го часа игры" alt=""/>
            </div>
            <div className={styles.clubInfo}>
              <div className={styles.profileName}>Нереальное место</div>
              <div className={styles.profileRow}>м. Курская</div>
              <div className={clubCardStyles.profileRow}>Рейтинг:</div>
            </div>
          </a>
          <button className={styles.reserveMini}>ЗАБРОНИРОВАТЬ</button>
        </div>
      </div>
    );
  }
}

export default ClubCard;
