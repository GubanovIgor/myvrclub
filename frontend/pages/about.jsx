import React from 'react';

//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import GamePage from '../components/GamePage';

const About = () => (
  <div>
    <Header />
    <GamePage />
    <Footer />
  </div>
);

export default About;
