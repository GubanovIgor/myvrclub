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
<<<<<<< HEAD
import { getClubsAC, switchPaginationValueAC, showFilterToggleAC, switchScreenModeAC } from '../redux/actions';
=======
import { getClubsAC, switchPaginationValueAC, showFilterToggleAC } from '../redux/actions';
>>>>>>> master

class Clubs extends Component {
  state = {
    screenWidth: 0,
  };

  handlePageChange = async (pageNumber) => {
    await this.props.pagination(pageNumber, this.props.filterToggle, 'club');
  };

  componentDidMount = async () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

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

  // Как менять screenMode на всем сайте, а не на каждой странице отдлеьно?
  updateDimensions = () => {
    if (window.innerWidth <= 438) {
      this.props.switchScreenMode('mobile');
    } else {
      this.props.switchScreenMode('desktop');
    }
  };

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
  screenMode: store.screenMode,
});

const mapDispatchToProps = (dispatch) => ({
  showFilterToggle: () => dispatch(showFilterToggleAC()),
  getClubs: () => dispatch(getClubsAC()),
  pagination: (value, filterToggleData, type) => dispatch(switchPaginationValueAC(value, filterToggleData, type)),
  switchScreenMode: (screenMode) => dispatch(switchScreenModeAC(screenMode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
