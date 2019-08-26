import React from 'react';

//SASS
import styles from '../cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClubPage from '../components/ClubPage';

const About = () => (
  <div>
    <Header />
    <ClubPage />
    <Footer />
  </div>
);

export default About;
