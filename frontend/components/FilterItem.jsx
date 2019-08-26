import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterItem.module.scss';

class FilterItem extends Component {

  onChange = (e) => {
    console.log(e.target.id);
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id={item}/>
        <label htmlFor={item}>{item}</label><br></br>
      </div>
    );
  }
}

export default FilterItem;
