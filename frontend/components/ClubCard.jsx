import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../clubCardMini.module.scss';

class ClubCard extends Component {
  render() {
    return (
      <div>
        <Link href='clubs/myClub'>
          <div className={styles.container}>
            <img className={styles.cover} src="/static/img/anvio-mini.png"/>
            <div className={styles.darkWrapper}>
              <h2 className={styles.description}>Anvio</h2>
              <p className={styles.description}>Дм. Ульянова 43к1</p>
              <p></p>
            </div>
            <div className={styles.rating}>7.6</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ClubCard;
