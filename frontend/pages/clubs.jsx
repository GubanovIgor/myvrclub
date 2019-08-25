import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClubCard from '../components/ClubCard';
import ClubFilter from '../components/ClubFilter';

class Clubs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
    };
  }

  componentDidMount = async () => {
    const resp = await fetch(`http://localhost:3100/club`);
    const data = await resp.json();
    this.setState({ clubs: data });
  };

  render() {
    console.log(this.state.clubs)
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <ClubFilter />
          <div className={styles.cardsWrapper}>
            {this.state.clubs.map((e, index) => {
              return <ClubCard key={ index } cover={ e.pictures.cover } title={ e.name } address={ e.address }/>;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = (store) => {
  clubs: store.clubs;
};

export default connect(mapStateToProps)(Clubs);
