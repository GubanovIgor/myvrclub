import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../stylesheets/clubCard.module.scss';
import { IMG_URL_PREFIX } from '../services/consts/consts';

class ClubCard extends Component {

  render() {
    const { club = {} } = this.props;
    return (
      <div>
        <Link href='/clubs/[urlname]' as={`/clubs/${club.urlName}`}>
          <div className={styles.container}>
            <img className={styles.cover} src={IMG_URL_PREFIX+club.cover}/>
            <div className={styles.darkWrapper}>
              <h2 className={styles.description}>{club.name}</h2>
              <p className={styles.description}>{club.address}</p>
            </div>
            <div className={styles.rating}>{club.rating}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ClubCard;
