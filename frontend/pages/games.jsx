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

// action creators
import { getGamesAC, switchPaginationValueAC } from '../redux/actions';

class Games extends Component {
  handlePageChange = async (pageNumber) => {
    await this.props.pagination(pageNumber, this.props.filterToggle);
  }

  componentDidMount = async () => {
    // console.log('this.props.paginationValue', this.props.paginationValue);
    if (this.props.games.length === 0) {
      this.props.getGames(this.props.filterToggle);
    }
  };

  render() {
    return (
      <div>
        <Header/>
        <Pagination handlePageChange={this.handlePageChange}/>
        <div className={styles.container}>
          <GameFilter />
          <div className={styles.cardsWrapper}>
            {this.props.games.map((game, index) => {
              return <GameCard key={index} game={game}/>;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    games: store.games,
    filterToggle: store.gamesFilterToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: (filterToggleData) => dispatch(getGamesAC(filterToggleData)),
    pagination: (value, filterToggleData) => dispatch(switchPaginationValueAC(value, filterToggleData)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
