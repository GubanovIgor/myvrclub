import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

// import AC
import {switchCaruselIndexAC } from '../redux/actions/carousel';
import {getClubsAC} from "../redux/actions/clubs.js";
import {getGamesAC} from "../redux/actions/games.js";

// SASS
import styles from '../stylesheets/index.module.scss'

// Components
import ClubCollections from '../components/ClubCollections';
import GameCollections from '../components/GameCollections';
import Carusel from '../components/Carusel';
import Header from '../components/Header';
//import IndexSearch from '../components/IndexSearch';
import Loading from '../components/Loading';

class Index extends Component {
  state = {
    caruselData: [
      'https://pic1.zhimg.com/v2-cceec281216bbb881324d1559b80aa91_1200x500.jpg',
      'https://d1lss44hh2trtw.cloudfront.net/assets/article/2015/12/10/rsz_eve-valkyrie-featured-image_1200x500.jpg',
      'https://www.digiseller.ru/preview/539631/p1_2461891_42c645c0.jpg',
      'https://i.citrus.ua/uploads/content/product-photos/lysyanaya/october/rj1.jpg',
      'https://pic1.zhimg.com/v2-cceec281216bbb881324d1559b80aa91_1200x500.jpg',
      'https://d1lss44hh2trtw.cloudfront.net/assets/article/2015/12/10/rsz_eve-valkyrie-featured-image_1200x500.jpg',
    ],
  };

  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    //console.log('getInitialProps - isServer', isServer);
    //console.log('reduxStore', reduxStore);
    await reduxStore.dispatch(getClubsAC()); //рендер с сервера (первый раз)
    await reduxStore.dispatch(getGamesAC()); //рендер с сервера (первый раз)
    return {
      games: reduxStore.getState().games,
      clubs: reduxStore.getState().clubs
    };
  }

  // componentDidMount = async () => {
  //   this.props.getGames();
  //   this.props.getClubs();
  // };

  caruselDataMix = (side, index) => {
    let newData = this.state.caruselData.slice();

    if (side === 'left') {
      let lastElem = newData.pop();
      newData.splice(0, 0, lastElem);
      this.setState({ caruselData: newData });
    }

    if (side === 'right') {
      let firstElem = newData.shift();
      newData.splice(newData.length, 0, firstElem);
      this.setState({ caruselData: newData });
      this.props.switchCaruselIndex(index - 1);
    }
  }

  switchCarusel = async (index) => {
    if (index === 0) {
      await this.props.switchCaruselIndex(index + 1);
      this.caruselDataMix('left');
    } else if (index === 3) {
      await this.props.switchCaruselIndex(index);
      this.caruselDataMix('right', index);
    } else {
      await this.props.switchCaruselIndex(index);
    }
  };
  //   if (side === 'right') {
  //     let firstElem = newData.shift();
  //     newData.splice(newData.length, 0, firstElem);
  //     this.setState({ caruselData: newData });
  //     this.props.switchCaruselIndex(index - 1);
  //   }
  // };

  // switchCarusel = async (index) => {
  //   if (index === 0) {
  //     await this.props.switchCaruselIndex(4);
  //   } else if (index === 5) {
  //     await this.props.switchCaruselIndex(1);
  //   } else {
  //     await this.props.switchCaruselIndex(index);
  //   }
  // }

  render() {
    const { games, clubs, screenMode } = this.props;
    return (
      <div>
        <Head>
          <title>MyVrClub.ru | Лучшие VR клубы Москвы</title>
          <meta name="viewport" content="width=device-width" />
          <meta name='description' content='Все VR клубы Москвы! У нас собраны все самые популярные VR игры. Выберите игру и найдите где в нее можно поиграть!' />
          <meta name='keywords' content='VR, Виртуальная реальность, vr клубы, vr игры' />
        </Head>
        <Header />
        {/*/!*<IndexSearch />*!/*/}
        {/*<div className={styles.title}>*/}
        {/*<h1>myvrclub.ru</h1>*/}
        {/*<h1>Агрегатор клубов виртуальной реальности</h1>*/}
        {/*</div>*/}
        {(screenMode === 'desktop') && <Carusel
          caruselIndex={this.props.caruselIndex}
          switchCarusel={this.switchCarusel}
          caruselData={this.state.caruselData}
          screenMode={screenMode}
        />}
        {(games.length !== 0) ? (<GameCollections />) : (<Loading />)}
        {(clubs.length !== 0) ? (<ClubCollections />) : (<Loading />)}
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
