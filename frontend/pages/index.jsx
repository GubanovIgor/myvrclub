import React, { Component } from 'react';
import { connect } from 'react-redux';
import { serverRenderClock, startClock } from '../redux/actions';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndexSearch from '../components/IndexSearch';
import ClubCollections from '../components/ClubCollections';
import GameCollections from '../components/GameCollections';
import Example from '../components/examplesThunk/examples';
import Carusel from '../components/Carusel';

// import AC
import { getClubsAC, getGamesAC, switchCaruselIndexAC } from '../redux/actions';

// SASS
import styles from '../stylesheets/index.module.scss'

class Index extends Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req;
    console.log('getInitialProps - isServer', isServer);
    //reduxStore.dispatch(serverRenderClock(isServer)) //рендер с сервера (первый раз)
    return { custom: 'custom props' };
  }

  componentDidMount = async () => {
    this.props.getGames();
    this.props.getClubs();
  };

  switchCarusel = (index) => {
    this.props.switchCaruselIndex(index);
  };

  render () {
    return (<div>
      <Header />
      {/*<IndexSearch />*/}
      {/* <div className={styles.title}>
        <h1>myvrclub.ru</h1>
        <h1>Агрегатор клубов виртуальной реальности</h1>
      </div> */}
      <Carusel
        caruselIndex={this.props.caruselIndex}
        switchCarusel={this.switchCarusel}
      />
      {(this.props.games.length) && <GameCollections />}
      {(this.props.clubs.length) && <ClubCollections />}
      <Footer />
    </div>
    );
  }
}

const mapStateToProps = (store) => ({
  clubs: store.clubs,
  games: store.games,
  caruselIndex: store.caruselIndex,
});

const mapDispatchToProps = (dispatch) => ({
  getClubs: () => dispatch(getClubsAC()),
  getGames: () => dispatch(getGamesAC()),
  switchCaruselIndex: (index) => dispatch(switchCaruselIndexAC(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
