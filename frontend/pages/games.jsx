import React, { Component } from 'react';
import { connect } from 'react-redux';
//import windowSize from 'react-window-size';
//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import GameFilter from '../components/GameFilter';
import Pagination from '../components/Pagination';
import FilterButton from '../components/FilterButton';

// action creators
import { getGamesAC, switchPaginationValueAC, showFilterToggleAC, switchScreenModeAC } from '../redux/actions';
import Loading from '../components/Loading';

class Games extends Component {
  handlePageChange = async (pageNumber) => {
    await this.props.pagination(pageNumber, this.props.filterToggle, 'game');
  };

  showFilter = () => {
    this.props.showFilterToggle();
  };

  componentDidMount = async () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    await this.props.getGames();
  };

  // Как менять screenMode на всем сайте, а не на каждой странице отдлеьно?
  updateDimensions = () => {
    if (window.innerWidth <= 438) {
      this.props.switchScreenMode('mobile');
    } else {
      this.props.switchScreenMode('desktop');
    }
  };

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
        <Pagination handlePageChange={this.handlePageChange} />
        <Footer />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: () => dispatch(getGamesAC()),
    pagination: (value, filterToggleData, type) => dispatch(switchPaginationValueAC(value, filterToggleData, type)),
    switchScreenMode: (screenMode) => dispatch(switchScreenModeAC(screenMode)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
