import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterItem.module.scss';

class FilterItem extends Component {
  render() {
    return (
      <div>
        <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='ps'/>
        <label htmlFor='ps'>PS VR</label><br></br>
      </div>
    );
  }
}

export default FilterItem;
