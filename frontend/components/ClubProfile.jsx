import React from 'react';

//SASS
import styles from '../stylesheets/clubProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';
import { IMG_URL_PREFIX } from '../services/consts/consts';

const ClubProfile = (props) => (
  <section className={styles.container}>
    {console.log('props ClubProfile JSX', props)}
    <div className={styles.profileTitle}>
      <h2>{props.club.name}</h2>
    </div>
    <div className={styles.profileContent}>
      <ImageProfileBlock club={props.club} isClub={true} isGame={false}/>
      <div className={styles.profileInformations}>
        <img
          src={IMG_URL_PREFIX + props.club.cover} width="360" height="202" alt="Batman: Arkham VR"
        />
        <p>
          <span>Адрес: </span>{props.club.address}<br></br>
          <span>Метро: </span>{props.club.metro[0]}<br></br>
          <span>Телефон: </span>{props.club.tel}<br></br>
          <span>Время работы будни/вых: </span>{props.club.workTime.weekdays}/{props.club.workTime.weekend}<br></br>
          {/*<span>Количество шлемов: </span>6 шт.<br></br>*/}
          <span>Стоимость 30 мин: </span>от {props.club.price[0]} ₽<br></br>
        </p>
        <input className={styles.button} type="submit" value="ЗАБРОНИРОВАТЬ"/>
      </div>
    </div>
  </section>
);

export default ClubProfile;
