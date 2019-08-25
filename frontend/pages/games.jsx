import React from 'react';

//SASS
import styles from '../games.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import GameFilter from '../components/GameFilter';

const Games = () => (
  <div>
    <Header />
    <div className={styles.container}>
      <GameFilter />
      <div className={styles.gameContainer}>
        <GameCard />
      </div>
    </div>
    <Footer />
  </div>
);

export default Games;
