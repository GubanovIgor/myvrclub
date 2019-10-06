import React from 'react';
// import { connect } from 'react-redux';
import Head from 'next/head';

// import { getClubsAC, getGamesAC } from '../redux/actions';

const Seo = (props) => {
  if (props.game) {
    return (
      <div>
        <Head>
          <title>{props.game.name}</title>
          <meta name='description' content={props.game.short_description}/>
          <meta name='keywords' content={props.game.keywords}/>
        </Head>
      </div>
    );
  } else if (props.club) {
    return (
      <div>
        <Head>
          <title>{props.club.name}</title>
          <meta name='description' content={props.club.short_description}/>
          <meta name='keywords' content={props.club.keywords}/>
        </Head>
      </div>
    );
  };

  return (
    <div>
    </div>
  );
};

// const mapStateToProps = (store) => {
//   return {
//     games: store.games,
//     clubs: store.clubs,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getGames: () => dispatch(getGamesAC),
//     getClubs: () => dispatch(getClubsAC),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Seo);
export default Seo;
