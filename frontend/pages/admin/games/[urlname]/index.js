import { useRouter } from 'next/router'
import React from 'react';
import { connect } from 'react-redux';
import { getGamesAC } from '../../../../redux/actions/games';
import Loading from '../../../../components/Loading';
import AdminHeader from '../../../../components/admin/AdminHeader';
import AdminGamePageEdit from '../../../../components/admin/games/AdminGamePageEdit';

const Games = (props) => {
  const router = useRouter();
  let game = null;
  if (props.games.length === 0) props.getGames();
  const { urlname } = router.query; //прилетает из роутера next.js

  if (!props.loadingGame) game = props.games.find(item => item.urlName === urlname); // получаем обьект из массива по urlname из router.query
  return (
    <>
      <AdminHeader/>
      {props.loadingGame
        ? <Loading/>
        : props.errorGame
          ? <div>Ошибка, попробуйте ещё раз</div>
          : game && <AdminGamePageEdit game={game}/>
      }
    </>
  )
};

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

