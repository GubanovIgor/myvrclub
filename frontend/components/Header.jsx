import React, { Component } from 'react';
// import Link from 'next/link';
import Link from './ActiveLink';
import {connect} from "react-redux";
import {checkSession} from "../redux/actions/submit.js";

// SASS
import '../stylesheets/body.module.scss';
import styles from '../stylesheets/header.module.scss';
// import {changeMapAC} from "../redux/actions/map.js";
// import {filterToggleClubsAC} from "../redux/actions/filters.js";
// import {getClubsAC, getClubsForMapAC} from "../redux/actions/clubs.js";

class Header extends Component {

  componentDidMount(){
    this.props.checkSession();
  }

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
          {/*<ul className={styles.userNavigation}>*/}
            {/*<li className={styles.loginLink}>*/}
              {/*<Link href='/auth/signup'><a>Регистрация</a></Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
          {/*<ul className={styles.userNavigation}>*/}
            {/*<li className={styles.loginLink}>*/}
              {/*<Link href='/auth/signin'><a>Вход</a></Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
          {/*<ul className={styles.userNavigation}>*/}
            {/*<li className={styles.loginLink}>*/}
              {/*<Link href='/auth/signout'><a>Выход</a></Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
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

function mapDispatchToProps(dispatch) {
  return {
    checkSession: () => dispatch(checkSession()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

