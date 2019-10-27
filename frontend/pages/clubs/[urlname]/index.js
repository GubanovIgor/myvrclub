import {useRouter} from 'next/router'
import React, {Component} from 'react';
import Link from 'next/link'
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import {connect} from 'react-redux';
import Loading from '../../../components/Loading';
import Seo from '../../../components/Seo';
import Head from 'next/head';
import {getClubAC} from "../../../redux/actions/clubs.js";
import {withRouter} from 'next/router'


class Clubs extends Component {

  componentDidMount() {
    this.props.getClub(this.props.router.query.urlname);
  }

  render() {
    const {club} = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width"/>
        </Head>
        {/*<Seo club={props.club} />*/}
        <Header/>
        {/*{console.log('this.props.loadingClub', this.props.loadingClub) }*/}
        {this.props.loadingClub
          ? <Loading/>
          : this.props.error
            ? <div>Ошибка, попробуйте ещё раз</div>
            // Здесь можно передать пропсы из AppWrapper
            : Object.entries(club).length !== 0 && <ClubPage club={club} autoPagination={this.props.autoPagination}/>
        }
      </>
    );
  }
}
//
const mapStateToProps = (store) => {
  return {
    club: store.club,
    loadingClub: store.loadingClub,
    error: store.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClub: (name) => dispatch(getClubAC(name)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Clubs));