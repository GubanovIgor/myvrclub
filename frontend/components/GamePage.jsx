import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/gamePage.module.scss';
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// import components
import ClubCard from '../components/ClubCard';
import Reviews from '../components/Reviews';
import GameProfile from '../components/GameProfile';
import ClubFilter from '../components/ClubFilter';
import { getClubsAC } from '../redux/actions';
import { connect } from 'react-redux';
import Map from '../components/Map';
import Loading from './Loading';

class GamePage extends Component {

  componentDidMount() {
    this.props.getClubs(undefined, undefined, this.props.game._id);

    // ymaps.ready(init);
    // // let myMap;
    
    // function init() {
    //   let myMap = new ymaps.Map("map", {
    //     center: [55.76, 37.64],
    //     zoom: 9,
    //   });
    // }
  }

  render() {

    const { game = [], clubs, loading, error} = this.props;
    const clubItems = clubs.map((club, index) =>
        <ClubCard key={index} club={club}/>);
    return (
      <main>
        <GameProfile game={game}/>

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

        <h2>Где поиграть в {game.name}</h2>

        {/* {(this.props.map) ? <Map /> : <p>qweqr</p>} */}

        {/* {(this.props.map) ? <Map /> : */}
          {/*<div className={cardsWrapper.container}>*/}
            {/*<ClubFilter gameId={this.props.game._id}/>*/}
            {/*<div className={cardsWrapper.cardsWrapper}>*/}
              {/*{loading*/}
                {/*? <div>Загрузка...</div>*/}
                {/*: error*/}
                  {/*? <div>Ошибка, попробуйте ещё раз</div>*/}
                  {/*: clubs && (clubs.map((club, index) => {*/}
                  {/*return <ClubCard key={index} club={club}/>;*/}
                {/*}))}*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*} */}

        {/*<div className={cardsWrapper.container}>*/}
          {/*<ClubFilter gameId={this.props.game._id}/>*/}
          {/*<div className={cardsWrapper.cardsWrapper}>*/}
            {/*{loading*/}
              {/*? <div>Загрузка...</div>*/}
              {/*: error*/}
                {/*? <div>Ошибка, попробуйте ещё раз</div>*/}
                {/*: clubs && (clubs.map((club, index) => {*/}
                {/*return <ClubCard key={index} club={club}/>;*/}
              {/*}))}*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className={cardsWrapper.container}>
          <ClubFilter gameId={this.props.game._id}/>
          <div className={cardsWrapper.cardsWrapper}>
            {loading
              ? <Loading/>
              : error
                ? <div>Ошибка, попробуйте ещё раз</div>
                : clubs && (this.props.map) ? <Map/> : (clubItems)}
          </div>
        </div>
        {/* <hr className={styles.breakLine}/> */}
        {/* <Reviews /> */}
      </main>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    clubs: store.clubs,
    loading: store.loading,
    error: store.error,
    map: store.map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClubs: (filterToggleData, pagination, gameId) => dispatch(getClubsAC(filterToggleData, pagination, gameId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
