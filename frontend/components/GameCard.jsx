import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../stylesheets/gameCard.module.scss';

class GameCard extends Component {
  render() {
    const { game = [] } = this.props;
    return (
      <Link href='/games/[urlname]' as={`/games/${game.urlName}`}>
        <div className={styles.container}>
          {<img className={styles.cover} src={game.cover} />}
          <p className={styles.title}>{game.name} {game.year}</p>
          {/*<div className={styles.new}>new</div>*/}
          <div className={styles.rating}>{game.rating}</div>
        </div>
      </Link>
    );
  }
}

export default GameCard;
