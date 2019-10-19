import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import ClubCard from '../components/ClubCard';
import ClubFilter from '../components/ClubFilter';
import FilterButton from '../components/FilterButton';
import Loading from '../components/Loading';

// import AC
import { getClubsAC, switchPaginationValueAC, showFilterToggleAC } from '../redux/actions';

class Clubs extends Component {
  showFilter = () => {
    this.props.showFilterToggle();
  };

  paginationHandler = () => {
    this.props.autoPagination('club');
  };

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    this.props.getClubs(this.props.filterToggle);
  };

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  };

  render() {
    const { clubs } = this.props;
    const itemsClub = clubs.map((club) => <ClubCard key={club._id} club={club} />);
    return (
      <div>
        <Head>
          <title>Список VR клубов | Лучшие VR клубы Москвы на MyVrClub.ru</title>
          <meta name='description' content='У нас собраны все VR клубы Москвы. Выберите свой VR клуб!' />
          <meta name='keywords' content='VR, Виртуальная реальность, vr клубы, vr игры' />
        </Head>
        <Header />
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов (Москва)</h1>
          <FilterButton showFilter={this.showFilter} />
        </div>
        <div className={styles.container}>
          {(this.props.screenMode === 'desktop') && <ClubFilter />}
          {(this.props.showFilter && this.props.screenMode === 'mobile') && <ClubFilter />}
          <div className={styles.cardsWrapper}>
            {(clubs.length !== 0) ? (itemsClub) : (<Loading />)}
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (store) => ({
  showFilter: store.showFilter,
  clubs: store.clubs,
  filterToggle: store.clubsFilterToggle,
  paginationValue: store.paginationValue,
  loadingClub: store.loadingClub,
  loading: store.loading,
  screenMode: store.screenMode,
});

const mapDispatchToProps = (dispatch) => ({
  showFilterToggle: () => dispatch(showFilterToggleAC()),
  getClubs: (filterToggleData, pagination, gameId) => dispatch(getClubsAC(filterToggleData, pagination, gameId)),
  pagination: (paginationValue, filterToggleData, type) => dispatch(switchPaginationValueAC(paginationValue, filterToggleData, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
