import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClubCard from '../components/ClubCard';
import ClubFilter from '../components/ClubFilter';
import { getClubsAC } from '../redux/actions';

class Clubs extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clubs: [],
  //   };
  // }

  componentDidMount = async () => {
    this.props.getClubs();
  };

  render() {
    // console.log(this.props.clubs);
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <ClubFilter />
          {/*<div className={styles.cardsWrapper}>*/}
            {/*{this.state.clubs.map((e, index) => {*/}
              {/*return <ClubCard key={ index } cover={ e.pictures.cover } title={ e.name } address={ e.address }/>;*/}
            {/*})}*/}
          {/*</div>*/}
        </div>
        <Footer />
      </div>
    );
  }
};

// const mapStateToProps = (store) => {
//   clubs: store.clubs;
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getClubs: () => dispatch(getClubsAC()),
  }
};

export default connect(null, mapDispatchToProps)(Clubs);
