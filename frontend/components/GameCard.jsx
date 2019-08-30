import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../stylesheets/gameCard.module.scss';

class GameCard extends Component {
  render() {
    const {game = []} = this.props;
    return (
        <Link href='/games/[urlname]' as={`/games/${game.urlName}`}>
        <div className={styles.container}>
          {
          <img className={styles.cover} src={game.cover}/>}
          <p className={styles.title}>{game.name}</p>
          <div className={styles.darkWrapper}/>
          {/*<div className={styles.new}>new</div>*/}
          <div className={styles.rating}>{Math.floor(Math.random() * 10) + 1}</div>
        </div>
      </Link>
    );
  }
}

export default GameCard;
