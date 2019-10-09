import React, { Component } from 'react';
import Link from './ActiveLink';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fireBaseRedux } from '../redux/actions';
import AuthModal from './auth/AuthModal';
import AuthDropdown from './auth/AuthDropdown';

// SASS
import styles from '../stylesheets/header.module.scss';
import '../stylesheets/body.module.scss';

class Header extends Component {

  componentDidMount() {
    this.props.fireBaseRedux();
  }

  render() {
    console.log(this.props)
    return (
      <header className={styles.mainHeader}>
        <nav className={styles.mainNavigation}> {/*container*/}
          <a className={styles.mainHeaderLogo}>
            <img src="/static/images/body/logo.png"
              title="MyVRClub - клубы виртулаьной реальности" width="50" height="50"
              alt="Sensorama" />
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
              {this.props.isSignedIn ?
                <AuthDropdown /> :
                <AuthModal />
              }
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.isSignedIn,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fireBaseRedux: fireBaseRedux,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
