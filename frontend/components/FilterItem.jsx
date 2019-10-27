import React, { Component } from 'react';
import { Input, InputWrapper } from '../stylesheets/filterItem';

// SASS
//import styles from '../stylesheets/filterItem.module.scss';

class FilterItem extends Component {
  render() {
    const { item, checked, category } = this.props;
    // console.log(this.props.checked)
    return (
      <InputWrapper checked={checked} img={'check-mark'}
      onClick={() => this.props.onChangeCheckbox(item, category)}>
      {item}
        {/* <Input
          onChange={() => this.props.onChangeCheckbox(item, category)}
          // className={styles.filterCheckbox}
          checked1={checked}
          type='checkbox'
          id={item}
        />
        <span className={styles.checkmark}/> */}
      </InputWrapper>
    );
  }
}

export default FilterItem;
