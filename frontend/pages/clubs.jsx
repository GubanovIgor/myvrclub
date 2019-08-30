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
import { getClubsAC, switchPaginationValueAC } from '../redux/actions';

class Clubs extends Component {
  handlePageChange = async (pageNumber) => {
    await this.props.pagination(pageNumber, this.props.filterToggle, 'club');
  };

  componentDidMount = async () => {
    this.props.getClubs();
  };

  render() {
    //console.log('this.props clubs.js', this.props);
    return (
      <div>
        <Header />
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов</h1>
        </div>
        <div className={styles.container}>
          <ClubFilter />
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
  clubs: store.clubs,
  filterToggle: store.gamesFilterToggle,
});

const mapDispatchToProps = (dispatch) => ({
  getClubs: () => dispatch(getClubsAC()),
  pagination: (value, filterToggleData, type) => dispatch(switchPaginationValueAC(value, filterToggleData, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
