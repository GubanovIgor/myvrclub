import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilterButton } from '../stylesheets/filterItem';
import { CardsInProfileWrapper } from '../stylesheets/index';

// SASS
// import styles from '../stylesheets/gamePage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import ClubCard from '../components/ClubCard';
// import Reviews from '../components/Reviews';
import GameProfile from '../components/GameProfile';
import ClubFilter from '../components/ClubFilter';
// import Map from '../components/Map';
import Loading from './Loading';

// action creators
import { showFilterToggleAC } from '../redux/actions/filters';
import {getClubsAC} from "../redux/actions/clubs.js";

class GamePage extends Component {
  showFilter = () => {
    this.props.showFilterToggle();
  };

  paginationHandler = () => {
    this.props.autoPagination('club', this.props.game._id);
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    await this.props.getClubs(this.props.filterToggle, undefined, this.props.game._id);
  }

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  }

  render() {
    console.log(this.props.game._id)
    const { game = [], clubs, loadingClub, error} = this.props;
    const itemsClub = clubs.map((club) => <ClubCard key={club._id} club={club} />);

    return (
      <main>
        <GameProfile game={game} />

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

        {/* {(this.props.loading) ? <Map/> : (<Loading />)} */}
        {/* <Map/> */}
        <CardsInProfileWrapper>
          <div className={cardsWrapper.titleWrapper}>
            <FilterButton img={'filterSettings'} onClick={this.showFilter} />
            <h2>Где поиграть в {game.name}</h2>
          </div>

          <div className={cardsWrapper.container}>
            {(this.props.screenMode === 'desktop') && <ClubFilter gameId={this.props.game._id} />}
            {(this.props.showFilter && this.props.screenMode === 'mobile') && <ClubFilter gameId={this.props.game._id} />}
            <div className={cardsWrapper.cardsWrapper}>
              {(clubs.length !== 0) ? (itemsClub) : (<Loading />)}
            </div>
          </div>
        </CardsInProfileWrapper>
        {/* <hr className={styles.breakLine}/> */}
        {/* <Reviews /> */}
      </main>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    showFilter: store.showFilter,
    clubs: store.clubs,
    // loadingClub: store.loadingClub,
    // loading: store.loading,
    // error: store.error,
    // map: store.map,
    screenMode: store.screenMode,
    filterToggle: store.clubsFilterToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getClubs: (filterToggleData, pagination, gameId) => dispatch(getClubsAC(filterToggleData, pagination, gameId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
