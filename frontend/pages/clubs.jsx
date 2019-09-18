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
    console.log(this.state);
  };

  showFilter = () => {
    this.props.showFilterToggle();
  };

  componentDidUpdate() {
    // this.setState({ screenWidth: window.innerWidth });
  };

  render() {
    return (
      <div>
        <Header />
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов</h1>
          <button onClick={this.showFilter} className={styles.filterButton}>Фильтры</button>
        </div>
        <div className={styles.container}>
          {(this.props.showFilter) && <ClubFilter />}
          <div className={styles.cardsWrapper}>
            {this.props.clubs.map((club, index) => {
              return <ClubCard key={ index } club={club}/>;
            })}
          </div>
        </div>
        <Pagination handlePageChange={this.handlePageChange}/>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  showFilter: store.showFilter,
  clubs: store.clubs,
  filterToggle: store.gamesFilterToggle,
});

const mapDispatchToProps = (dispatch) => ({
  showFilterToggle: () => dispatch(showFilterToggleAC()),
  getClubs: () => dispatch(getClubsAC()),
  pagination: (value, filterToggleData, type) => dispatch(switchPaginationValueAC(value, filterToggleData, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
