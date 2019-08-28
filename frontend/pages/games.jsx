import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import GameFilter from '../components/GameFilter';
import { getGamesAC } from '../redux/actions';

class Games extends Component {

  componentDidMount = async () => {
    if (this.props.games.length === 0) this.props.getGames(this.props.filterToggle);
  };

  render() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <GameFilter />
          <div className={styles.cardsWrapper}>
            {this.props.games.map((e, index) => {
              return <GameCard key={ index } cover={ e.cover } title= { e.name } />;
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
