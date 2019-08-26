import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import GameFilter from '../components/GameFilter';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  componentDidMount = async () => {
    const resp = await fetch(`http://localhost:3100/game`);
    const data = await resp.json();
    console.log(data);
    this.setState({ games: data });
  };

  render() {
    console.log(this.state.games);
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <GameFilter />
          <div className={styles.cardsWrapper}>
            {this.state.games.map((e, index) => {
              return <GameCard key={ index } cover={ e.pictures[0] } title= { e.name } />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (store) => {
  games: store.games;
};

export default connect(mapStateToProps)(Games);
