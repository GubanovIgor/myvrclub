import React, {Component} from 'react';
import Header from '../../../components/Header';
import {connect} from 'react-redux';
import Loading from '../../../components/Loading';
import Seo from '../../../components/Seo';
import Head from 'next/head';
import {getGameAC} from "../../../redux/actions/games.js";
import {withRouter} from 'next/router'
import GamePage from "../../../components/GamePage.jsx";

class Games extends Component {

  static async getInitialProps({ reduxStore, req, query }) {
    const isServer = !!req;
    await reduxStore.dispatch(getGameAC(query.urlname)); //рендер с сервера (первый раз)
    return {
      game: reduxStore.getState().game
    };
  }

  // componentDidMount() {
  //   this.props.getGame(this.props.router.query.urlname);
  //   console.log('CDM')
  // }

  render() {
    const {game, autoPagination} = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width"/>
        </Head>
        <Seo game={game} />
        <Header/>
        {console.log('this.props.loadingGame', this.props.loadingGame)}
        {this.props.loadingGame
          ? <Loading/>
          : this.props.error
            ? <div>Ошибка, попробуйте ещё раз</div>
            // Здесь можно передать пропсы из AppWrapper
            : Object.entries(game).length !== 0 && <GamePage game={game} autoPagination={autoPagination}/>
        }
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    game: store.game,
    loadingClub: store.loadingClub,
    error: store.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGame: (name) => dispatch(getGameAC(name)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Games));