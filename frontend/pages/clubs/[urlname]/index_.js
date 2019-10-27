import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link'
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import { connect } from 'react-redux';
import Loading from '../../../components/Loading';
import Seo from '../../../components/Seo';
import Head from 'next/head';
import {getClubAC} from "../../../redux/actions/clubs.js";

const Clubs = (props) => {
  const router = useRouter();
  const { urlname } = router.query;
  console.log(urlname);
  props.getClub(urlname);
  //let index = props.clubs.map(el => el.urlName).indexOf(urlname);
  //if (!props.loadingClub) club = props.club.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query

  return (

    <>
      {console.log('sdfsdfsf',props.loadingClub)}
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      {/*<Seo club={props.club} />*/}
      <Header />
      {/*{props.loadingClub*/}
        {/*? <Loading />*/}
        {/*: props.error*/}
          {/*? <div>Ошибка, попробуйте ещё раз</div>*/}
          {/*// Здесь можно передать пропсы из AppWrapper*/}
          {/*: props.club && <ClubPage club={props.club}*/}
            {/*autoPagination={props.autoPagination}*/}
          {/*/>*/}
      {/*}*/}
    </>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);

