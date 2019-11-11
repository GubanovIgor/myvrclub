import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllClubsAC} from "../../../redux/actions/clubs.js";
import AdminHeader from "../AdminHeader.jsx";
import Loading from "../../Loading.jsx";

class ClubsStat extends Component {

  componentDidMount = async () => {
    this.props.getAllClubs('');
  };

  render() {
    const { clubs, isLogged } = this.props;
    clubs.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    return (
      <div>
        <AdminHeader/>
        {this.props.loadingClub
          ? <Loading />
          : this.props.errorClub
            ? <div>Ошибка, попробуйте ещё раз</div>
            : (clubs[0])  && (clubs.map((club) => <div> <b>{club.name}</b> кликов: {club.clickCounter} </div> ))
        }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ClubsStat);