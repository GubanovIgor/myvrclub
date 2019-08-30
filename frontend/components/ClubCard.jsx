import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../stylesheets/clubCard.module.scss';
import { IMG_URL_PREFIX } from '../services/consts/consts';

class ClubCard extends Component {

  render() {
    const { club = {} } = this.props;
    //console.log('club>>>>>>>>>>>>.', club);
    return (
      <div>
        <Link href='/clubs/[urlname]' as={`/clubs/${club.urlName}`}>
          <a>
          <div className={styles.container}>
            <img className={styles.cover} src={IMG_URL_PREFIX+club.cover}/>
            <div className={styles.darkWrapper}>
              <h2 className={styles.description}>{club.name}</h2>
              <p className={styles.description}>{club.address}</p>
              <p></p>
            </div>
            <div className={styles.rating}>{Math.floor(Math.random() * 10) + 1}</div>
          </div>
          </a>
        </Link>
      </div>
    );
  }
}

export default ClubCard;
