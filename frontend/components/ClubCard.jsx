import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../clubCard.module.scss';

class ClubCard extends Component {

  render() {
    return (
      <div>
        <Link href='clubs/myClub'>
          <div className={styles.container}>
            <img className={styles.cover} src={`/static/clubCover/${this.props.cover}`}/>
            <div className={styles.darkWrapper}>
              <h2 className={styles.description}>{this.props.title}</h2>
              <p className={styles.description}>{this.props.address}</p>
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
