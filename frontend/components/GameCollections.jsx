import React, { Component } from 'react';
import { connect } from 'react-redux';
import GameCard from '../components/GameCard';

// SASS
import styles from '../stylesheets/gameCollections.module.scss';
import sectionStyles from '../stylesheets/section.module.scss';

export class GameCollections extends Component {
  state = {
    caruselPosition: 0,
  }

  scroll = async (side) => {
    if (side === 'left') {
      await this.setState({ caruselPosition: this.state.caruselPosition + 936 })
      if (this.state.caruselPosition > 0) {
        await this.setState({ caruselPosition: 0 })
      }
    } else {
      await this.setState({ caruselPosition: this.state.caruselPosition - 936 })
      if (this.state.caruselPosition < -2900) {
        await this.setState({ caruselPosition: -2900 })
      }
    }
  }

  render() {
    return (
      <div className={sectionStyles.section}>
        <section className={styles.container}>
          <h3 className={styles.title}>Лучшие игры</h3>
          <div className={styles.gameList} style={{ marginLeft: this.state.caruselPosition }}>
            {this.props.games.map((el, index) => {
              return <GameCard game={el} key={index} />
            })}
          </div>
          {(this.state.caruselPosition !== 0) && <div onClick={() => this.scroll('left')} className={styles.toLeft} />}
          {(this.state.caruselIndex !== 300) && <div onClick={() => this.scroll('right')} className={styles.toRight} />}
          {/* <div className={styles.allTags}>
            <ul className={styles.popularTags}>
              <li><a href="#">Гонки</a></li>
              <li><a href="#">Зомби</a></li>
              <li><a href="#">Экшен</a></li>
              <li><a href="#">Мультиплеер</a></li>
            </ul>
            <ul className={styles.tags}>
              <li><a href="#">Все игры</a></li>
            </ul>
          </div> */}
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
