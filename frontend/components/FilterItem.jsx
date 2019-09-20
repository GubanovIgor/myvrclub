import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterItem.module.scss';

class FilterItem extends Component {
  render() {
    const { item, checked, category } = this.props;
    return (
      <label className={styles.container}>{item}
        <input
          onChange={() => this.props.onChangeCheckbox(item, category)}
          className={styles.filterCheckbox}
          checked={checked}
          type='checkbox'
          id={item}
        />
        <span className={styles.checkmark}/>
      </label>
    );
  }
}

export default FilterItem;
