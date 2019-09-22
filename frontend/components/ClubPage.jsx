import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/clubPage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import GameCard from '../components/GameCard';
import Reviews from '../components/Reviews';
import ClubProfile from '../components/ClubProfile';
import GameFilter from '../components/GameFilter';
import { getGamesAC } from '../redux/actions';
import { connect } from 'react-redux';
import Loading from './Loading';

class ClubPage extends Component {

  componentDidMount() {
    this.props.getGames(undefined, undefined, this.props.club._id);
  }

  componentWillUnmount() {

  }

  render() {
    const { club, games, loadingGame, errorGame } = this.props;
    const gameItems = games.map((game, index) => {
      return <GameCard key={index} game={game}/>;
    });
    // let clubGames = [];
    // if (!loadingGame) {
    //   club.gamesIds.map((gameIds, index) => {
    //     console.log('games', games.find(x => x._id === gameIds))
    //     clubGames.push(games.find(x => x._id === gameIds))
    //   })
    // }
    return (
      <main>
        <ClubProfile club={club}/>
        {/* <section>
          <div className={styles.container}>
            <p className={styles.profileMenu}>Игры клуба</p>
            <p className={styles.profileMenu}>Цены</p>
            <p className={styles.profileMenu}>Отзывы</p>
            <p className={styles.profileMenu}>Оборудование</p>
            <p className={styles.profileMenu}>Контакты</p>
          </div>
          <hr className={styles.breakLine}/>
        </section> */}
        <h2>Игры клуба {club.name}</h2>

        <div className={cardsWrapper.container}>
          <GameFilter clubId={this.props.club._id}/>
          <div className={cardsWrapper.cardsWrapper}>

            {loadingGame
              ? <Loading/>
              : errorGame
                ? <div>Ошибка, попробуйте ещё раз</div>
                : games && (gameItems)}

          </div>
        </div>
        {/* <hr className={styles.breakLine}/> */}
        {/* <Reviews/> */}

      </main>
    );
  }
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
    getGames: (filterToggleData, pagination, clubId) => dispatch(getGamesAC(filterToggleData, pagination, clubId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubPage);
