import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styled Components
import { ClubCardsWrapper } from '../stylesheets/index';

// Import Components
//import { FilterButton } from '../stylesheets/filterItem';
import MapSection from './MapSection';
import Loading from './Loading';
import ClubCard from "./ClubCard.jsx";

class ClubCards extends Component {
  render() {
    const itemsClub = this.props.clubs.map((club) => <ClubCard key={club._id} club={club} />);
    return (
      <ClubCardsWrapper>
        {(this.props.map) && <MapSection/>}
        {(this.props.clubs.length !== 0 && !this.props.map) && (itemsClub)}
      </ClubCardsWrapper>
    )
  }
};

const mapStateToProps = (store) => {
  return {
    map: store.map,
  };
};

export default connect(mapStateToProps)(ClubCards);