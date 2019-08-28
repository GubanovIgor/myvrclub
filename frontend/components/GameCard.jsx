import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../stylesheets/gameCard.module.scss';

class GameCard extends Component {
  render() {
    const {gameName} = this.props;
    return (
      <Link href='clubs/myGame'>
        <div className={styles.container}>
          <img className={styles.cover} src={'/static/img_old/anvio-mini.png'}/>
          <p className={styles.title}>{gameName}</p>
          <div className={styles.darkWrapper}/>
          <div className={styles.new}>new</div>
          <div className={styles.rating}>7.6</div>
        </div>
      </Link>
    );
  }
}

export default GameCard;
