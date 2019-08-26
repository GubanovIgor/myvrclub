import React, { Component } from 'react';
import Link from 'next/link';

// SASS
import styles from '../header.module.scss';
import '../body.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.mainHeader}>
        <nav className={styles.mainNavigation}> {/*container*/}
          <a className={styles.mainHeaderLogo}>
            <img src="/static/img/logo.png"
                 title="Sensorama - клубы виртулаьной реальности" width="50" height="50"
                 alt="Sensorama"/>
          </a>
          <ul className={styles.siteNavigation}>
            <li>
              <Link href='/'><a className={styles.siteNavigationActive} href="#">Главная</a></Link>
            </li>
            <li>
              <Link href='/games'><a>Игры</a></Link>
            </li>
            <li>
              <Link href='/clubs'><a>Клубы</a></Link>
            </li>
            <li>
              <Link href='/about'><a>О нас</a></Link>
            </li>
          </ul>
          <ul className={styles.userNavigation}>
            <li className={styles.loginLink}>
              <Link href='/entry'><a>Вход</a></Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
