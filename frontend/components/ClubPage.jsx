import React, { Component } from 'react';

// SASS
// import styles from '../clubPage.module.scss';
import styles from '../cardsWrapper.module.scss';

// import components
import GameCard from '../components/GameCard';
import Reviews from '../components/Reviews';
import ClubProfile from '../components/ClubProfile';
import GameFilter from '../components/GameFilter';

class ClubPage extends Component {

  render() {
    return (
      <main>
        <ClubProfile />

        <section className="container">
          <ul>
            <li><a href="#">Игры клуба</a></li>
            <li><a href="#">Цены</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Оборудование</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <hr className="footer-line"/>
        </section>

        <div className={styles.container}>
          <GameFilter />
          <div className={styles.cardsWrapper}>
            <GameCard />
          </div>
        </div>

        <Reviews />

      </main>
    );
  }
}

export default ClubPage;
