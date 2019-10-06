import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link'
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import { connect } from 'react-redux';
import { getClubsAC } from '../../../redux/actions';
import Loading from '../../../components/Loading';
import Seo from '../../../components/Seo';

const Clubs = (props) => {
  const router = useRouter();
  let club = null;
  if (props.clubs.length === 0) props.getClubs();
  const { urlname } = router.query;
  //let index = props.clubs.map(el => el.urlName).indexOf(urlname);
  if (!props.loadingClub) club = props.clubs.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query
  return (
    <>
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
    getClubs: () => dispatch(getClubsAC()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);

