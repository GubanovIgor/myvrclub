import React from 'react';

//SASS
import styles from '../stylesheets/reviews.module.scss';

// import components

const Reviews = () => (
  <div>
    <section className={styles.container}>
      <div className={styles.reviewsTitle}>
        <h2>Отзывы на <span>Нереальное место</span></h2>
        <div className={styles.gameMarkWrapper}>
          <p className={styles.gameMark}>7.4</p>
          <p className={styles.gameMarkAmount}>всего: 14</p>
        </div>
      </div>
      <div className={styles.reviews}>
        <ul>
          <li>
            <p className={styles.reviewsName}>Железный Феликс</p>
            <p className={styles.reviewsDate}>14.11.2018</p>
            <p className={styles.reviewsContent}>
              В первые 50 минут фильма ничего не произойдет. Сюжет уровня вашего ежедневного похода на работу. Потом
              создастся проблема, высосанная из пальца, потому что без нее произведения бы вообще не было, а был бы
              какой-то
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.allTags}>
        <ul className={styles.tags}>
          <li><a href="#">Еще отзывы</a></li>
        </ul>
      </div>
    </section>
  </div>
);

export default Reviews;
