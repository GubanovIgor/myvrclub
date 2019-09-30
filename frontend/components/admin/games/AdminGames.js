import React, { Component } from 'react';
import AdminHeader from '../AdminHeader';
import { getGamesAC, switchPaginationValueAC } from '../../../redux/actions';
import { connect } from 'react-redux';
import AdminGameCard from './AdminGameCard';
import Footer from '../../Footer';
import styles from '../../../stylesheets/cardsWrapper.module.scss';
class AdminGames extends Component {

  componentDidMount = async () => {
    this.props.getGames();
  };

  render() {
    return (
      <div>
        <AdminHeader/>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR игр (админка) </h1>
        </div>
        <div className={styles.container}>

          <div className={styles.cardsWrapper}>
            {this.props.games.map((game, index) => {
              return <AdminGameCard key={index} game={game}/>;
            })}
          </div>
        </div>
        {/*<Pagination handlePageChange={this.handlePageChange}/>*/}
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
    getGames: () => dispatch(getGamesAC()),
    pagination: (value, filterToggleData, type) => dispatch(switchPaginationValueAC(value, filterToggleData, type)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminGames);