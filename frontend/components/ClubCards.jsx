import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styled Components
import { ClubCardsWrapper } from '../stylesheets/index';

// Import Components
import { FilterButton } from '../stylesheets/filterItem';
import MapSection from './MapSection';
import Loading from './Loading';

class ClubCards extends Component {
  render() {
    return (
      <ClubCardsWrapper>
        {(this.props.map) && <MapSection/>}
        {(this.props.clubs.length !== 0 && !this.props.map) && (this.props.itemsClub)}
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