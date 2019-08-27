import React, { Component } from 'react';
import { connect } from 'react-redux';

//SASS
import styles from '../stylesheets/cardsWrapper.module.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClubCard from '../components/ClubCard';
import ClubFilter from '../components/ClubFilter';

// import AC
import { getClubsAC } from '../redux/actions';

class Clubs extends Component {

  componentDidMount = async () => {
    if (this.props.clubs.length === 0) this.props.getClubs();
  };

  render() {
    //console.log('this.props clubs.js', this.props);
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <ClubFilter />
          <div className={styles.cardsWrapper}>
            {this.props.clubs.map((e, index) => {
              return <ClubCard key={ index } cover={ e.cover } title={ e.name } address={ e.address } data={e}/>;
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  clubs: store.clubs,
});

const mapDispatchToProps = (dispatch) => ({
  getClubs: () => dispatch(getClubsAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clubs);
