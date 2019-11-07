import React, {Component} from 'react';
import AdminHeader from '../AdminHeader';
import {connect} from 'react-redux';
import AdminGameCard from './AdminGameCard';
import Loading from "../../Loading.jsx";
import {getAllGamesAC} from "../../../redux/actions/games.js";
import styles from '../../../stylesheets/cardsWrapper.module.scss';

class AdminGames extends Component {

  state = {
    val: undefined
  };

  // paginationHandler = () => {
  //   this.props.autoPagination('game');
  // };

  componentDidMount = async () => {
    // window.addEventListener('scroll', this.paginationHandler);
    // await this.props.getGames();
    this.props.getAllGames();
  };

  search = async () => {
    this.props.getAllGames(this.state.val);
  };

  // componentWillUnmount = () => {
  //   window.removeEventListener('scroll', this.paginationHandler);
  //   this.props.autoPagination(false);
  // };

  render() {
    const {games, isLogged} = this.props;
    games.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
      <div>
        <AdminHeader/>
        <input type="text" onChange={() => this.setState({val: event.target.value})}/>
        <button onClick={this.search}>Search</button>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR игр (админ) </h1>
        </div>
        <div className={styles.container}>
          <div className={styles.cardsWrapper}>
            {/*{(games.length !== 0) ? (games.map((game, index) => <AdminGameCard key={index} game={game}/>)) : (*/}
              {/*<Loading/>)}*/}

            {this.props.loadingGame
              ? <Loading />
              : this.props.errorGame
                ? <div>Ошибка, попробуйте ещё раз</div>
                // : (games[0]) && (isLogged) && (games.map((game, index) => <AdminGameCard key={index} game={game}/>))
                : (games[0]) && {isLogged} && (games.map((game, index) => <AdminGameCard key={index} game={game}/>))
            }
          </div>
        </div>
        {/*<Pagination handlePageChange={this.handlePageChange}/>*/}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    // showFilter: store.showFilter,
    games: store.games,
    // filterToggle: store.gamesFilterToggle,
    // screenMode: store.screenMode,
    // paginationValue: store.paginationValue,
    errorGame: store.errorGame,
    loadingGame: store.loadingGame,
    loading: store.loading,
    isLogged: store.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGames: (name) => dispatch(getAllGamesAC(name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminGames);