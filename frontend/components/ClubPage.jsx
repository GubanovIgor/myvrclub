import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilterButton } from '../stylesheets/filterItem';
import { CardsInProfileWrapper } from '../stylesheets/index';

// SASS
//import styles from '../stylesheets/clubPage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import GameCard from '../components/GameCard';
//import Reviews from '../components/Reviews';
import ClubProfile from '../components/ClubProfile';
import GameFilter from '../components/GameFilter';
import Loading from './Loading';

// action creators
import { showFilterToggleAC } from '../redux/actions/filters';
import {getGamesAC} from "../redux/actions/games.js";

class ClubPage extends Component {
  showFilter = () => {
    this.props.showFilterToggle();
  };

  paginationHandler = () => {
    this.props.autoPagination('game', this.props.club._id);
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    await this.props.getGames(this.props.filterToggle, undefined, this.props.club._id);
  }

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  }

  render() {
    const { club, games } = this.props;
    const gameItems = games.map((game) => {
      return <GameCard key={game._id} game={game} />;
    });

    return (
      <main>
        <ClubProfile club={club} />
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
        <CardsInProfileWrapper>
          <div className={cardsWrapper.titleWrapper}>
            <FilterButton img={'filterSettings'} onClick={this.showFilter} />
            <h2>Игры клуба {club.name}</h2>
          </div>

          <div className={cardsWrapper.container}>
            {(this.props.screenMode === 'desktop') && <GameFilter clubId={this.props.club._id} />}
            {(this.props.showFilter && this.props.screenMode === 'mobile') && <GameFilter clubId={this.props.club._id} />}
            <div className={cardsWrapper.cardsWrapper}>
              {(games.length !== 0) ? (gameItems) : (<Loading />)}
            </div>
          </div>
        </CardsInProfileWrapper>
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
    filterToggle: store.gamesFilterToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: (filterToggleData, pagination, clubId) => dispatch(getGamesAC(filterToggleData, pagination, clubId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubPage);
