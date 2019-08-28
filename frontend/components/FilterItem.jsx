import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filterItem.module.scss';

class FilterItem extends Component {
  render() {
    const { item, checked, category } = this.props;
    return (
      <div>
        <input
          onChange={() => this.props.onChangeCheckbox(item, category)}
          className={styles.filterCheckbox}
          checked={checked}
          type='checkbox'
          id={item}
        />
        <label htmlFor={item}>{item}</label><br/>
      </div>
    );
  }
}

export default FilterItem;
