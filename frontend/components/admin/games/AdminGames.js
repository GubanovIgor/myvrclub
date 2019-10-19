import React, { Component } from 'react';
import AdminHeader from '../AdminHeader';
import { getGamesAC, showFilterToggleAC, switchPaginationValueAC } from '../../../redux/actions';
import { connect } from 'react-redux';
import AdminGameCard from './AdminGameCard';
import styles from '../../../stylesheets/cardsWrapper.module.scss';
import Loading from "../../Loading.jsx";

class AdminGames extends Component {

  paginationHandler = () => {
    this.props.autoPagination('game');
  };

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    await this.props.getGames();

  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  };

  render() {
    const {games, isLogged} = this.props;
    const itemsGame = games.map((game) => <AdminGameCard key={game._id} game={game} />);
    return (
      <div>
        <AdminHeader/>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR игр (админ) </h1>
        </div>
        <div className={styles.container}>
          <div className={styles.cardsWrapper}>
            {(games.length !== 0 && isLogged) ? (itemsGame) : (<Loading />)}
          </div>
        </div>
        {/*<Pagination handlePageChange={this.handlePageChange}/>*/}
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
    isLogged: store.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: () => dispatch(getGamesAC()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminGames);