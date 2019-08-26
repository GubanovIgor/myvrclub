import React from 'react';

//SASS
import styles from '../stylesheets/clubProfile.module.scss';

// import components
import ImageProfileBlock from '../components/ImageProfileBlock';

const ClubProfile = () => (
  <section className={styles.container}>
    <div className={styles.profileTitle}>
      <h2>Нереальное место</h2>
    </div>
    <div className={styles.profileContent}>
      <ImageProfileBlock />
      <div className={styles.profileInformations}>
        <img
          src="/static/img/unreal-place-cover.png" width="360" height="202" alt="Batman: Arkham VR"
        />
        <p>
          <span>Адрес:</span>Нижний Сусальный переулок 5, стр 5А<br></br>
          <span>Метро:</span>Курская<br></br>
          <span>Телефон:</span>+7 495 129 49 19<br></br>
          <span>Время работы:</span>сегодня 10.00 - 22.00<br></br>
          <span>Количество шлемов:</span>6 шт.<br></br>
          <span>Стоимость 30 мин:</span>от 350 ₽<br></br>
        </p>
        <input className={styles.button} type="submit" value="ЗАБРОНИРОВАТЬ"/>
      </div>
    </div>
  </section>
);

export default ClubProfile;
