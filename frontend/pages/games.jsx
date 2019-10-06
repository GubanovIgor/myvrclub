import React, { Component } from 'react';
import { connect } from 'react-redux';
//import windowSize from 'react-window-size';
//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import GameFilter from '../components/GameFilter';
import FilterButton from '../components/FilterButton';

// action creators
import { getGamesAC, showFilterToggleAC } from '../redux/actions';
import Loading from '../components/Loading';

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
    const gameItems = games.map((game, index) => <GameCard key={index} game={game} />);
    return (
      <div>
        <Header />
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR игр</h1>
          <FilterButton showFilter={this.showFilter} />
        </div>
        <div className={styles.container}>
          {(this.props.screenMode === 'desktop') && <GameFilter />}
          {(this.props.showFilter && this.props.screenMode === 'mobile') && <GameFilter />}
          <div className={styles.cardsWrapper}>
            {(games.length !== 0) ? (gameItems) : (<Loading />)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    showFilter: store.showFilter,
    games: store.games,
    filterToggle: store.gamesFilterToggle,
    screenMode: store.screenMode,
    paginationValue: store.paginationValue,
    loadingGame: store.loadingGame,
    loading: store.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: () => dispatch(getGamesAC()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
