import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link'
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import Footer from '../../../components/Footer';
import { connect } from 'react-redux';
import { getGamesAC } from '../../../redux/actions';
import GamePage from '../../../components/GamePage';

const Games = (props) => {
  const router = useRouter();
  let game = null;
  if (props.games.length === 0) props.getGames();
  const { urlname } = router.query;
  //let index = props.games.map(el => el.urlName).indexOf(urlname);
  if (!props.loading) game = props.games.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query
  return (
    <>
      <Header/>
      {props.loading
        ? <div>Загрузка...</div>
        : props.error
          ? <div>Ошибка, попробуйте ещё раз</div>
          : game && <GamePage game={game}/>
      }
      <Footer/>
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    games: store.games,
    loading: store.loading,
    error: store.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: () => dispatch(getGamesAC()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);

