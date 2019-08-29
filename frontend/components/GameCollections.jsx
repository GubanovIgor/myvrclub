import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameCard from '../components/GameCard';

// SASS
import styles from '../stylesheets/gameCollections.module.scss';

export class GameCollections extends Component {
  render() {
    return (
      <div>
        <section className={styles.container}>
          <h3 className={styles.title}>Лучшие игры</h3>
          <div className={styles.gameList}>
            <GameCard game={this.props.games[13]} />
            <GameCard game={this.props.games[12]} />
            <GameCard game={this.props.games[5]} />
            <GameCard game={this.props.games[7]} />
          </div>
          <div className={styles.allTags}>
              <ul className={styles.popularTags}>
                <li><a href="#">Гонки</a></li>
                <li><a href="#">Зомби</a></li>
                <li><a href="#">Экшен</a></li>
                <li><a href="#">Мультиплеер</a></li>
              </ul>
              <ul className={styles.tags}>
                <li><a href="#">Все игры</a></li>
              </ul>
            </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  games: state.games,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(GameCollections);
