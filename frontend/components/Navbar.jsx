import React, { Component } from 'react';
import Link from 'next/link'

// SASS
import styles from '../style.module.scss'

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link href='/'>
          <a className={styles.test}>Home</a>
        </Link>
        <Link href='/games'>
          <a className={styles.test}>Games</a>
        </Link>
        <Link href='/clubs'>
          <a className={styles.test}>Clubs</a>
        </Link>
      </div>
    )
  }
}

export default Navbar;
