import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClubCard from '../components/ClubCard';
import ClubFilter from '../components/ClubFilter';
import Pagination from '../components/Pagination';
import FilterButton from '../components/FilterButton';
import Loading from '../components/Loading';

// import AC
import { getClubsAC, switchPaginationValueAC, showFilterToggleAC } from '../redux/actions';

class Clubs extends Component {
  state = {
    screenWidth: 0,
  };

  handlePageChange = async (pageNumber) => {
    await this.props.pagination(pageNumber, this.props.filterToggle, 'club');
  };

  componentDidMount = async () => {
    this.props.getClubs();
  };

  showFilter = () => {
    this.props.showFilterToggle();
  };

  prevPage = () => {
    this.handlePageChange(this.props.paginationValue - 1);
  }

  nextPage = () => {
    this.handlePageChange(this.props.paginationValue + 1);
  }

  render() {
    const { clubs } = this.props;
    const itemsClub = clubs.map((club, index) => <ClubCard key={index} club={club}/>);
    return (
      <div>
        <Header />
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов</h1>
          <FilterButton showFilter={this.showFilter}/>
          {/* <button onClick={this.showFilter} className={styles.filterButton}>
            <svg width="18px" height="18px" viewBox="0 0 60 48">
              <g className={styles.filterIcon}>
                <path d="M41.08,48H2c-0.553,0-1,0.448-1,1s0.447,1,1,1h39.08c0.488,3.387,3.401,6,6.92,6c3.859,0,7-3.14,7-7s-3.141-7-7-7   C44.481,42,41.568,44.613,41.08,48z" />
                <path d="M20.695,27H2c-0.553,0-1,0.448-1,1s0.447,1,1,1h18.632c0.396,3.602,3.456,6.414,7.161,6.414s6.765-2.812,7.161-6.414H54   c0.553,0,1-0.448,1-1s-0.447-1-1-1H34.891c-0.577-3.4-3.536-6-7.098-6S21.272,23.6,20.695,27z" />
                <path d="M8,0C4.141,0,1,3.14,1,7s3.141,7,7,7c3.519,0,6.432-2.613,6.92-6H54c0.553,0,1-0.448,1-1s-0.447-1-1-1H14.92   C14.432,2.613,11.519,0,8,0z" />
              </g>
            </svg>
          </button> */}
      </div>
      <div className={styles.container}>
        {(this.props.showFilter) && <ClubFilter />}
        <div className={styles.cardsWrapper}>
          {(clubs.length !== 0) ? (itemsClub) : (<Loading/>)}
        </div>
      </div>
      <Pagination
        handlePageChange={this.handlePageChange}
        prevPage={this.prevPage}
        nextPage={this.nextPage}
      />
      <Footer />
      </div >
    );
  }
}

const mapStateToProps = (store) => ({
  showFilter: store.showFilter,
  clubs: store.clubs,
  filterToggle: store.gamesFilterToggle,
  paginationValue: store.paginationValue,
});

const mapDispatchToProps = (dispatch) => ({
  showFilterToggle: () => dispatch(showFilterToggleAC()),
  getClubs: () => dispatch(getClubsAC()),
  pagination: (value, filterToggleData, type) => dispatch(switchPaginationValueAC(value, filterToggleData, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
