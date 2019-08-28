import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/gamePage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import ClubCard from '../components/ClubCard';
import Reviews from '../components/Reviews';
import GameProfile from '../components/GameProfile';
import ClubFilter from '../components/ClubFilter';

class GamePage extends Component {

  render() {
    const { game } = this.props;
    return (
      <main>
        <GameProfile game={game}/>

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
          <ClubFilter />
          <div className={cardsWrapper.cardsWrapper}>
          </div>
        </div>
        <hr className={styles.breakLine}/>
        <Reviews />

      </main>
    );
  }
}

export default GamePage;
