import React, { Component } from 'react';
// import Link from 'next/link';
import Link from '../ActiveLink';

// SASS
import styles from '../../stylesheets/header.module.scss';
import '../../stylesheets/body.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.mainHeader}>
        <nav className={styles.mainNavigation}> {/*container*/}
          <a className={styles.mainHeaderLogo}>
            <img src="/static/images/body/logo.png"
                 title="MyVRClub - клубы виртулаьной реальности" width="50" height="50"
                 alt="Sensorama"/>
          </a>
          <ul className={styles.siteNavigation}>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/'><a>Главная</a></Link>
            </li>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/admin/games'><a>Игры</a></Link>
            </li>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/admin/clubs'><a>Клубы</a></Link>
            </li>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/admin/reg'><a>Регистрация</a></Link>
            </li>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/admin/login'><a>Вход</a></Link>
            </li>
            {/*<li>*/}
              {/*<Link activeClassName={styles.siteNavigationActive} href='/about'><a>О нас</a></Link>*/}
            {/*</li>*/}
          </ul>
          {/*<ul className={styles.userNavigation}>*/}
            {/*<li className={styles.loginLink}>*/}
              {/*<Link activeClassName={styles.siteNavigationActive} href='/admin/login'><a>Вход</a></Link>*/}
            {/*</li>*/}

          {/*</ul>*/}
        </nav>
      </header>
    );
  }
}

export default Header;
