import { useRouter } from 'next/router'
import React from 'react';
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import { connect } from 'react-redux';
import Loading from '../../../components/Loading';
import Seo from '../../../components/Seo';
import Head from 'next/head';
import { getAllClubsAC } from '../../../redux/actions/clubs';

const Clubs = (props) => {
  const router = useRouter();
  let club = null;
  if (props.clubs.length === 0) props.getAllClubs('');
  const { urlname } = router.query;
  //let index = props.clubs.map(el => el.urlName).indexOf(urlname);
  if (!props.loadingClub) club = props.clubs.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Seo club={club} />
      <Header />
      {props.loadingClub
        ? <Loading />
        : props.error
          ? <div>Ошибка, попробуйте ещё раз</div>
          // Здесь можно передать пропсы из AppWrapper
          : club && <ClubPage
            club={club}
            autoPagination={props.autoPagination}
          />
      }
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    clubs: store.clubs,
    loadingClub: store.loadingClub,
    error: store.error,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllClubs: (name) => dispatch(getAllClubsAC(name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);

