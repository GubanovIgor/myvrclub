import React from 'react';

//SASS
import styles from '../cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClubCard from '../components/ClubCard';
import ClubFilter from '../components/ClubFilter';

const Clubs = () => (
  <div>
    <Header />
    <div className={styles.container}>
      <ClubFilter />
      <div className={styles.cardsWrapper}>
        <ClubCard />
      </div>
    </div>
    <Footer />
  </div>
);

export default Clubs;
