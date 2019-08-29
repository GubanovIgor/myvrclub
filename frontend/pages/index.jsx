import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndexSearch from '../components/IndexSearch';
import ClubCollections from '../components/ClubCollections';
import GameCollections from '../components/GameCollections';
import Example from '../components/examplesThunk/examples';
import { serverRenderClock, startClock } from '../redux/actions';

// import AC
import { getClubsAC, getGamesAC } from '../redux/actions';

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

  componentWillUnmount () {
  };

  render () {
    return (<div>
      <Header />
      <IndexSearch />
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
});

const mapDispatchToProps = (dispatch) => ({
  getClubs: () => dispatch(getClubsAC()),
  getGames: () => dispatch(getGamesAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
