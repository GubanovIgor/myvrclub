import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

class GameCard extends Component {
  render() {
    return (
      <div>
        <h3>Оборудование</h3>
        <FilterItem />
      </div>
    );
  }
}

export default GameCard;