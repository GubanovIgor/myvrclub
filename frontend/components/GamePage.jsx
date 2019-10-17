import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/gamePage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import ClubCard from '../components/ClubCard';
import Reviews from '../components/Reviews';
import GameProfile from '../components/GameProfile';
import ClubFilter from '../components/ClubFilter';
import Map from '../components/Map';
import Loading from './Loading';
import FilterButton from '../components/FilterButton';

// action creators
import { getClubsAC, showFilterToggleAC } from '../redux/actions';

class GamePage extends Component {
  showFilter = () => {
    this.props.showFilterToggle();
  };

  paginationHandler = () => {
    this.props.autoPagination('club');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.paginationHandler);
    this.props.getClubs(undefined, undefined, this.props.game._id);
  }

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  }

  render() {
    const { game = [], clubs, loadingClub, error} = this.props;
    const itemsClub = clubs.map((club, index) => <ClubCard key={index} club={club}/>);

    return (
      <main>
        <GameProfile game={game}/>

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

        <div className={cardsWrapper.titleWrapper}>
          <h2>Где поиграть в {game.name}</h2>
          <FilterButton showFilter={this.showFilter} />
        </div>

        <div className={cardsWrapper.container}>
          {(this.props.screenMode === 'desktop') && <ClubFilter gameId={this.props.game._id}/>}
          {(this.props.showFilter && this.props.screenMode === 'mobile') && <ClubFilter gameId={this.props.game._id}/>}
          <div className={cardsWrapper.cardsWrapper}>
            {(clubs.length !== 0) ? (itemsClub) : (<Loading />)}
          </div>
        </div>
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
    loadingClub: store.loadingClub,
    loading: store.loading,
    error: store.error,
    map: store.map,
    screenMode: store.screenMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getClubs: (filterToggleData, pagination, gameId) => dispatch(getClubsAC(filterToggleData, pagination, gameId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
