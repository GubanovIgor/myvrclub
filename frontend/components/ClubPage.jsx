import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/clubPage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import GameCard from '../components/GameCard';
import Reviews from '../components/Reviews';
import ClubProfile from '../components/ClubProfile';
import GameFilter from '../components/GameFilter';

class ClubPage extends Component {

  render() {
    const { club } = this.props;
    return (
      <main>
        <ClubProfile club={club}/>

        <section>
          <div className={styles.container}>
            <p className={styles.profileMenu}>Игры клуба</p>
            <p className={styles.profileMenu}>Цены</p>
            <p className={styles.profileMenu}>Отзывы</p>
            <p className={styles.profileMenu}>Оборудование</p>
            <p className={styles.profileMenu}>Контакты</p>
          </div>
          <hr className={styles.breakLine}/>
        </section>

        <div className={cardsWrapper.container}>
          <GameFilter />
          <div className={cardsWrapper.cardsWrapper}>
            <GameCard />
          </div>
        </div>
        <hr className={styles.breakLine}/>
        <Reviews />

      </main>
    );
  }
}

export default ClubPage;
