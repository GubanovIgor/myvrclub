import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

import { FilterButton } from '../stylesheets/filterItem';
import { ProfileContent__Wrapper } from '../stylesheets/index';

//import windowSize from 'react-window-size';


// import components
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import GameFilter from '../components/GameFilter';

// action creators
import { showFilterToggleAC } from '../redux/filters/actions.js';
import {getGamesAC} from "../redux/games/actions.js";
import Loading from '../components/Loading';

//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

class Games extends Component {
  showFilter = () => {
    this.props.showFilterToggle();
  };

  paginationHandler = () => {
    this.props.autoPagination('game');
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    await this.props.getGames();

  };


  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  }

  render() {
    const { games } = this.props;
    const gameItems = games.map((game) => <GameCard key={game._id} game={game} />);
    return (
      <div>
        <Head>
          <title>Список VR игр | Лучшие VR игры на MyVrClub.ru</title>
          <meta name="viewport" content="width=device-width" />
          <meta name='description' content='У нас собраны все самые популярные VR игры. Выберите игру и найдите где в нее можно поиграть!' />
          <meta name='keywords' content='VR, Виртуальная реальность, vr клубы, vr игры' />
        </Head>
        <Header />
        {/* <GameSearch/> */}
        <ProfileContent__Wrapper>
          <div className={styles.titleWrapper}>
            <FilterButton img={'filterSettings'} onClick={this.showFilter} />
            <h1 className={styles.title}>Список VR игр</h1>
          </div>
          <div className={styles.container}>
            {(this.props.screenMode === 'desktop') && <GameFilter />}
            {(this.props.showFilter && this.props.screenMode === 'mobile') && <GameFilter />}
            <div className={styles.cardsWrapper}>

              {(games.length !== 0) ? (gameItems) : (<Loading />)}
            </div>
          </div>
        </ProfileContent__Wrapper>
      </div>
    );
  }
}

Games.defaultProps = {
  games: []
};

const mapStateToProps = (store) => {
  return {
    showFilter: store.filter.showFilter,
    games: store.games.games,
    SearchName: store.SearchName,
    filterToggle: store.filter.gamesFilterToggle,
    screenMode: store.screenMode,
    paginationValue: store.pagination.paginationValue,
    loadingGame: store.loadingGame,
    loading: store.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: (filterToggleData, pagination, clubId, name) => dispatch(getGamesAC(filterToggleData, pagination, clubId, name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
