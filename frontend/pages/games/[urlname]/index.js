import { useRouter } from 'next/router'
import React from 'react';
import Link from 'next/link'
import Header from '../../../components/Header';
import ClubPage from '../../../components/ClubPage';
import { connect } from 'react-redux';
import { getGamesAC } from '../../../redux/actions';
import GamePage from '../../../components/GamePage';
import Loading from '../../../components/Loading';
import Seo from '../../../components/Seo';
import Head from 'next/head';

const Games = (props) => {
  const router = useRouter();
  let game = null;
  if (props.games.length === 0) props.getGames();
  const { urlname } = router.query; //прилетает из роутера next.js
  if (!props.loadingGame) game = props.games.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query
  return (
    <>
      <Seo game={game} />
      <Header />
      {props.loadingGame
        ? <Loading />
        : props.errorGame
          ? <div>Ошибка, попробуйте ещё раз</div>
          : game && <GamePage
            game={game}
            autoPagination={props.autoPagination}
          />
      }
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    games: store.games,
    loadingGame: store.loadingGame,
    errorGame: store.errorGame,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: () => dispatch(getGamesAC()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);

