import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import SignUp from './SignUp';

// Action Creators
import { showModalAC } from '../pages/_app';

// SASS
import styles from '../header.module.scss';

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
              <button onClick={this.props.showModal}>Вход</button>
            </li>
          </ul>
        </nav>
        {(this.props.modalCheck) ? <SignUp /> : <p>Пока нет модального окна, нажми вход</p>}
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  modalCheck: store.modalCheck,
});

const mapDispatchToProps = (dispatch) => ({
  showModal: () => dispatch(showModalAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
