import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../clubCardMini.module.scss';

// import styles from '../main.module.scss';
// import clubCardStyles from '../ClubCard.module.scss';

class ClubCard extends Component {
  render() {
    let backgroundImage = {
      backgroundImage: 'url(' + '/static/img/unreal-place.png' + ')',
    };
    return (
      <div>
        {/*<div className={styles.profileNew}>*/}
          {/*<a href="#">*/}
            {/*<div className={styles.profileCover} style={backgroundImage}>*/}
            {/*</div>*/}
            {/*<div className={styles.clubTop}>*/}
              {/*<img src="/static/img/price.jpg" title="Минимальная стоимость 1-го часа игры" alt=""/>*/}
            {/*</div>*/}
            {/*<div className={styles.clubInfo}>*/}
              {/*<div className={styles.profileName}>Нереальное место</div>*/}
              {/*<div className={styles.profileRow}>м. Курская</div>*/}
              {/*<div className={styles.profileRating}>Рейтинг:</div>*/}
            {/*</div>*/}
          {/*</a>*/}
          {/*<button className={styles.reserveMini}>ЗАБРОНИРОВАТЬ</button>*/}
        {/*</div>*/}
        {/*<Link href='clubs/myClub'>*/}
          {/*<div className={styles.cardWrapper}>*/}
            {/*<img className={styles.cover} src="/static/img/anvio-mini.png"/>*/}
            {/*<p className={styles.title}>Anvio</p>*/}
            {/*<div className={styles.descriptionWrapper}>*/}
              {/*<div className={styles.profileRow}>м. Курская</div>*/}
              {/*<div className={styles.profileRating}>Рейтинг:</div>*/}
            {/*</div>*/}
            {/*<button className={styles.reserveMini}>ЗАБРОНИРОВАТЬ</button>*/}
          {/*</div>*/}
        {/*</Link>*/}

        <Link href='clubs/myClub'>
          <div className={styles.container}>
            <img className={styles.cover} src="/static/img/anvio-mini.png"/>
            <div className={styles.darkWrapper}>
              <h2 className={styles.description}>Anvio</h2>
              <p className={styles.description}>метро: Курская<br></br>Братиславская<br></br>улица 1905 года</p>
              <p></p>
            </div>
            <div className={styles.rating}>7.6</div>
          </div>
        </Link>

      </div>
    );
  }
}

export default ClubCard;
