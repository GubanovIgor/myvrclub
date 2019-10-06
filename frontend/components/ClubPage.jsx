import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/clubPage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import GameCard from '../components/GameCard';
import Reviews from '../components/Reviews';
import ClubProfile from '../components/ClubProfile';
import GameFilter from '../components/GameFilter';
import Loading from './Loading';
import FilterButton from '../components/FilterButton';

// action creators
import { getGamesAC, showFilterToggleAC } from '../redux/actions';

class ClubPage extends Component {
  showFilter = () => {
    this.props.showFilterToggle();
  };

  paginationHandler = () => {
    this.props.autoPagination('game');
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    await this.props.getGames(undefined, undefined, this.props.club._id);
  }

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  }

  render() {
    const { club, games } = this.props;
    const gameItems = games.map((game) => {
      return <GameCard key={game._id} game={game}/>;
    });
    // let clubGames = [];
    // if (!loadingGame) {
    //   club.gamesIds.map((gameIds, index) => {
    //     console.log('games', games.find(x => x._id === gameIds))
    //     clubGames.push(games.find(x => x._id === gameIds))
    //   })
    // }
    return (
      <main>
        <ClubProfile club={club}/>
        {/* <section>
          <div className={styles.container}>
            <p className={styles.profileMenu}>Игры клуба</p>
            <p className={styles.profileMenu}>Цены</p>
            <p className={styles.profileMenu}>Отзывы</p>
            <p className={styles.profileMenu}>Оборудование</p>
            <p className={styles.profileMenu}>Контакты</p>
          </div>
          <hr className={styles.breakLine}/>
        </section> */}
        <div className={cardsWrapper.titleWrapper}>
          <h2>Игры клуба {club.name}</h2>
          <FilterButton showFilter={this.showFilter} />
        </div>

        <div className={cardsWrapper.container}>
          {(this.props.screenMode === 'desktop') && <GameFilter clubId={this.props.club._id}/>}
          {(this.props.showFilter && this.props.screenMode === 'mobile') && <GameFilter clubId={this.props.club._id}/>}
          <div className={cardsWrapper.cardsWrapper}>
            {(games.length !== 0) ? (gameItems) : (<Loading />)}
          </div>
        </div>
        {/* <hr className={styles.breakLine}/> */}
        {/* <Reviews/> */}
      </main>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    showFilter: store.showFilter,
    games: store.games,
    // loadingGame: store.loadingGame,
    // loading: store.loading,
    screenMode: store.screenMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: (filterToggleData, pagination, clubId) => dispatch(getGamesAC(filterToggleData, pagination, clubId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubPage);
