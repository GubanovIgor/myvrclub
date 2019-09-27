import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import ClubCard from '../components/ClubCard';
import ClubFilter from '../components/ClubFilter';
import Pagination from '../components/Pagination';
import FilterButton from '../components/FilterButton';
import Loading from '../components/Loading';

// import AC
import { getClubsAC, switchPaginationValueAC, showFilterToggleAC } from '../redux/actions';

class Clubs extends Component {
  handlePageChange = async () => {
    await this.props.pagination(this.props.paginationValue + 1, this.props.filterToggle, 'club');
  };

  componentDidMount = async () => {
    window.addEventListener('scroll', this.autoPagination);
    this.props.getClubs();
  };

  showFilter = () => {
    this.props.showFilterToggle();
  };

  componentWillUnmount = async () => {
    await this.props.pagination(1, this.props.filterToggle, 'game');
  }

  autoPagination = async () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    let clientHeight = document.documentElement.clientHeight;
    if (windowRelativeBottom < clientHeight + 100 && !this.props.loading) {
      this.handlePageChange(); // Как сделать, чтобы срабатывало только один раз?
    }
  }

  render() {
    const { clubs } = this.props;
    const itemsClub = clubs.map((club, index) => <ClubCard key={index} club={club} />);
    return (
      <div>
        <Header />
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов</h1>
          <FilterButton showFilter={this.showFilter} />
        </div>
        <div className={styles.container}>
          {(this.props.screenMode === 'desktop') && <ClubFilter />}
          {(this.props.showFilter && this.props.screenMode === 'mobile') && <ClubFilter />}
          <div className={styles.cardsWrapper}>
            {(clubs.length !== 0) ? (itemsClub) : (<Loading />)}
          </div>
        </div>
        <Pagination
          handlePageChange={this.handlePageChange}
          paginationValue={this.props.paginationValue}
        />
      </div >
    );
  }
}

const mapStateToProps = (store) => ({
  showFilter: store.showFilter,
  clubs: store.clubs,
  filterToggle: store.gamesFilterToggle,
  paginationValue: store.paginationValue,
  loading: store.loading,
  screenMode: store.screenMode,
});

const mapDispatchToProps = (dispatch) => ({
  showFilterToggle: () => dispatch(showFilterToggleAC()),
  getClubs: () => dispatch(getClubsAC()),
  pagination: (paginationValue, filterToggleData, type) => dispatch(switchPaginationValueAC(paginationValue, filterToggleData, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
