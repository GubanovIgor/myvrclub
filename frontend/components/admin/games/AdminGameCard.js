import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../../../stylesheets/gameCard.module.scss';

class AdminGameCard extends Component {
  render() {
    const {game = []} = this.props;
    return (
      <>
        <Link href='/admin/games/[urlname]' as={`/admin/games/${game.urlName}`}>
          <div className={styles.container}>
            {
              <img className={styles.cover} src={game.cover}/>}
            <p className={styles.title}>Game Name: <b>{game.name}</b></p>
            <div className={styles.darkWrapper}/>
            <div className={styles.rating}>{game.rating}</div>
          </div>
        </Link>
      </>
    );
  }
}

export default AdminGameCard;