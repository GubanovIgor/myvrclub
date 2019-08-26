import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import Footer from '../../../components/Footer';
import { connect } from 'react-redux';
import { getClubsAC } from '../../../redux/actions';

const Clubs = (props) => {
  const router = useRouter();
  if (props.clubs.length === 0) props.getClubs();
  const { urlname } = router.query;
  ///console.log('urlname', urlname);
  //console.log('clubs', props.clubs);
  //let index = props.clubs.map(el => el.urlName).indexOf(urlname);
  const  club = props.clubs.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query
  console.log('club', club);
  return (
    <>
        <Header />
      {/*<h1>Club: {club.urlName}</h1>*/}
        {/*<ClubPage club={club}/>*/}
        <Footer />
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    clubs: store.clubs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClubs: () => dispatch(getClubsAC()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);

