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
import Loading from '../components/Loading';

class Clubs extends Component {
  handlePageChange = async (pageNumber) => {
    await this.props.pagination(pageNumber, this.props.filterToggle, 'club');
  };

  componentDidMount() {
    this.props.getClubs();
  };

  render() {
    const { clubs } = this.props;
    //console.log('this.props clubs.js', this.props);
    const itemsClub = clubs.map((club, index) => <ClubCard key={index} club={club}/>);
    return (
      <div>
        <Header/>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов</h1>
        </div>
        <div className={styles.container}>
          <ClubFilter/>
          <div className={styles.cardsWrapper}>
            {console.log(!!clubs)}
            {(clubs.length !== 0) ? (itemsClub) : (<Loading/>)}
          </div>
        </div>
        <Pagination handlePageChange={this.handlePageChange}/>
        <Footer/>
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
