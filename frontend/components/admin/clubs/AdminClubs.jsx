import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../../../stylesheets/cardsWrapper.module.scss';

// import components
import Loading from '../../../components/Loading';
import AdminClubCard from './AdminClubCard.jsx';
import AdminHeader from '../AdminHeader';

// import AC
import { getClubsAC, switchPaginationValueAC, showFilterToggleAC } from '../../../redux/actions';

class AdminClubs extends Component {

  paginationHandler = () => {
    this.props.autoPagination('club');
  };

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    this.props.getClubs();
  };

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  };

  render() {
    const { clubs } = this.props;
    const itemsClub = clubs.map((club, index) => <AdminClubCard key={index} club={club} />);
    return (
      <div>

        <AdminHeader/>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов (Админ)</h1>

        </div>
        <div className={styles.container}>
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
  filterToggle: store.gamesFilterToggle,
  paginationValue: store.paginationValue,
  loadingClub: store.loadingClub,
  loading: store.loading,
  screenMode: store.screenMode,
});

const mapDispatchToProps = (dispatch) => ({
  showFilterToggle: () => dispatch(showFilterToggleAC()),
  getClubs: () => dispatch(getClubsAC()),
  pagination: (paginationValue, filterToggleData, type) => dispatch(switchPaginationValueAC(paginationValue, filterToggleData, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminClubs);
