import React, { Component } from 'react';
import { connect } from 'react-redux';


// import components
import Loading from '../../../components/Loading';
import AdminClubCard from './AdminClubCard.jsx';
import AdminHeader from '../AdminHeader';

// import AC
import {getAllClubsAC} from "../../../redux/actions/clubs.js";

//SASS
import styles from '../../../stylesheets/cardsWrapper.module.scss';

class AdminClubs extends Component {

  // paginationHandler = () => {
  //   this.props.autoPagination('club');
  // };

  componentDidMount = async () => {
    // window.addEventListener('scroll', this.paginationHandler);
    this.props.getAllClubs();
  };

  // componentWillUnmount = async () => {
  //   window.removeEventListener('scroll', this.paginationHandler);
  //   this.props.autoPagination(false);
  // };

  render() {
    const { clubs, isLogged } = this.props;
    clubs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
      <div>
        <AdminHeader/>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Список VR клубов (Админ)</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.cardsWrapper}>
            {this.props.loadingClub
              ? <Loading />
              : this.props.errorClub
                ? <div>Ошибка, попробуйте ещё раз</div>
                : (clubs[0]) && (isLogged) && (clubs.map((club) => <AdminClubCard key={club._id} club={club} />))
            }
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (store) => ({
  clubs: store.clubs,
  loadingClub: store.loadingClub,
  loading: store.loading,
  isLogged: store.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getAllClubs: (name) => dispatch(getAllClubsAC(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminClubs);
