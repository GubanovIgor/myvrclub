import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import SignIn from './SignIn';

// Action Creators
import { showModalSignUpAC, showModalSignInAC } from '../pages/_app';

// SASS
import styles from '../header.module.scss';

class Header extends Component {
  render() {
    console.log(this.props);
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
              <button onClick={this.props.showModalSignUp}>Регистрация</button>
              <button onClick={this.props.showModalSignIn}>Вход</button>
            </li>
          </ul>
        </nav>
        {(this.props.modalCheckSignUp) ? <SignUp /> : <p>Чекер модального окна регистрации</p>}
        {(this.props.modalCheckSignIn) ? <SignIn /> : <p>Чекер модального окна входа</p>}
      </header>
    );
  }
}

const mapStateToProps = (store) => ({
  modalCheckSignUp: store.modalCheckSignUp,
  modalCheckSignIn: store.modalCheckSignIn,
});

const mapDispatchToProps = (dispatch) => ({
  showModalSignUp: () => dispatch(showModalSignUpAC()),
  showModalSignIn: () => dispatch(showModalSignInAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
