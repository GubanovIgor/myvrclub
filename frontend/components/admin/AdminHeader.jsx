import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Link from 'next/link';
import Link from '../ActiveLink';

// SASS
import '../../stylesheets/body.module.scss';
import styles from '../../stylesheets/header.module.scss';

class Header extends Component {
  render() {
    const { isLogged } = this.props;
    return (
      <header className={styles.mainHeader}>
        <nav className={styles.mainNavigation}> {/*container*/}
          <a className={styles.mainHeaderLogo}>
            <img src="../../static/images/body/logo.png"
                 title="MyVRClub - клубы виртулаьной реальности" width="50" height="50"
                 alt="MyVrClub"/>
          </a>
          <ul className={styles.siteNavigation}>
            <li>
              <Link activeClassName={styles.siteNavigationActive} href='/'><a>Главная</a></Link>
            </li>
            {(isLogged) && (
              <>
                <li>
                  <Link activeClassName={styles.siteNavigationActive}
                        href='/admin/games'><a>Игры (админ)</a></Link>
                </li>
                <li>
                  <Link activeClassName={styles.siteNavigationActive}
                        href='/admin/clubs'><a>Клубы (админ)</a></Link>
                </li>
                <li>
                  <Link activeClassName={styles.siteNavigationActive}
                        href='/admin/stat'><a>Статистика Клубы</a></Link>
                </li>
              </>
            )}
            {(!isLogged) && (
              <>
                <li>
                  <Link activeClassName={styles.siteNavigationActive}
                        href='/admin/reg'><a>Регистрация</a></Link>
                </li>
                <li>
                  <Link activeClassName={styles.siteNavigationActive}
                        href='/admin/login'><a>Вход</a></Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    logging: store.logging,
    isLogged: store.isLogged,
  };
};

export default connect(mapStateToProps)(Header);