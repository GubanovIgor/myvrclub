import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../gameCard.module.scss';

class GameCard extends Component {
  render() {
    return (
      <div>
        <Link href='clubs/myClub'>
          <div className={styles.container}>
            <img className={styles.cover} src={this.props.cover}/>
            <p className={styles.title}>{this.props.title}</p>
            <div className={styles.darkWrapper}></div>
            <div className={styles.new}>new</div>
            <div className={styles.rating}>7.6</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default GameCard;
