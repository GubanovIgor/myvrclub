import React, { Component } from 'react';

// SASS
import styles from '../main.module.scss';

class GameCard extends Component {
  render() {
    let backgroundImage = {
      backgroundImage: 'url(' + '/static/img/batman-arkham-vr.png' + ')',
    };
    return (
      <div className={styles.gameList}>
        <div className={styles.profileNew}>
          <a href="#">
            <div className={styles.profileCover} style={backgroundImage}>
        </div>
            <div className={styles.gameTop}>
              <img src="/static/img/12.png" title="Для детей старше 12 лет" alt=""/>
            </div>
            <div className={styles.gameInfo}>
              <div className={styles.profileName}>Batman: Arkham VR</div>
              <div className={styles.profileRow}>2017</div>
              <div className={styles.profileRow}>Приключения, триллер</div>
              <div className={styles.gamePlatform}>
                <ul>
                  <li><img src="/static/img/ps4.png" height="25px" title="Поддерживается на системе PS4 VR" alt=""/></li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default GameCard;
