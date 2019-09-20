import React, { Component } from 'react';
import { connect } from 'react-redux';

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
import { getGamesAC, switchPaginationValueAC, showFilterToggleAC } from '../redux/actions';

class Games extends Component {
  handlePageChange = async (pageNumber) => {
    await this.props.pagination(pageNumber, this.props.filterToggle, 'game');
  };

  showFilter = () => {
    this.props.showFilterToggle();
  };

  componentDidMount = async () => {
      this.props.getGames();
  };

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR игр</h1>
          <FilterButton showFilter={this.showFilter}/>
        </div>
        <div className={styles.container}>
        {(this.props.showFilter) && <GameFilter />}
          <div className={styles.cardsWrapper}>
            {this.props.games.map((game, index) => {
              return <GameCard key={index} game={game}/>;
            })}
          </div>
        </div>
        <Pagination handlePageChange={this.handlePageChange}/>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: () => dispatch(getGamesAC()),
    pagination: (value, filterToggleData, type) => dispatch(switchPaginationValueAC(value, filterToggleData, type)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
