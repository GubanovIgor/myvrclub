import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link'
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import Footer from '../../../components/Footer';
import { connect } from 'react-redux';
import { getClubsAC } from '../../../redux/actions';
import Loading from '../../../components/Loading';

const Clubs = (props) => {
  const router = useRouter();
  let club = null;
  if (props.clubs.length === 0) props.getClubs();
  const { urlname } = router.query;
  //let index = props.clubs.map(el => el.urlName).indexOf(urlname);
  if (!props.loading) club = props.clubs.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query
  return (
    <>
      <Header/>
      {props.loading
        ? <Loading/>
        : props.error
          ? <div>Ошибка, попробуйте ещё раз</div>
          : club && <ClubPage club={club}/>
      }
      <Footer/>
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    clubs: store.clubs,
    loading: store.loading,
    error: store.error,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClubs: () => dispatch(getClubsAC()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);

