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

class GamePage extends Component {

  componentDidMount() {
    this.props.getClubs(undefined, undefined, this.props.game._id);
  }

  render() {
    const { game = [], clubs, loading, error} = this.props;
    return (
      <main>
        <GameProfile game={game}/>

        <section>
          <div className={styles.container}>
            <p className={styles.profileMenu}>Игры клуба</p>
            <p className={styles.profileMenu}>Цены</p>
            <p className={styles.profileMenu}>Отзывы</p>
            <p className={styles.profileMenu}>Оборудование</p>
            <p className={styles.profileMenu}>Контакты</p>
          </div>
          <hr className={styles.breakLine}/>
        </section>

        <div className={cardsWrapper.container}>
          <ClubFilter />
          <div className={cardsWrapper.cardsWrapper}>
            {loading
              ? <div>Загрузка...</div>
              : error
                ? <div>Ошибка, попробуйте ещё раз</div>
                : clubs && (clubs.map((club, index) => {
                return <ClubCard key={index} club={club}/>;
              }))}
          </div>
        </div>
        <hr className={styles.breakLine}/>
        <Reviews />

      </main>
    );
  }
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
    getClubs: (filterToggleData, pagination, clubId) => dispatch(getClubsAC(filterToggleData, pagination, clubId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
