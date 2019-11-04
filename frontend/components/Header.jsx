import React, { Component } from 'react';
// import Link from 'next/link';
import Link from './ActiveLink';

// SASS
import '../stylesheets/body.module.scss';
import styles from '../stylesheets/header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.mainHeader}>
        <nav className={styles.mainNavigation}> {/*container*/}
          <a className={styles.mainHeaderLogo}>
            <img src="/static/images/body/logo.png"
                 title="MyVRClub - клубы виртулаьной реальности" width="100" height="100"
                 alt="MyVRClub"/>
          </a>
          <ul className={styles.siteNavigation}>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/'><a>Главная</a></Link>
            </li>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/games'><a>Игры</a></Link>
            </li>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/clubs'><a>Клубы</a></Link>
            </li>
            {/*<li>*/}
              {/*<Link activeClassName={styles.siteNavigationActive} href='/about'><a>О нас</a></Link>*/}
            {/*</li>*/}
          </ul>
          <ul className={styles.userNavigation}>
            <li className={styles.loginLink}>
              <Link href='/submit'><a>Вход</a></Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

