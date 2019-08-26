import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

class FilterSection extends Component {
  render() {
    const { el } = this.props;
    return (
      <div>
        <hr className={styles.breakLine}></hr>
        <h3>{el.title}</h3>
        {el.value.map((el, index) =>
          <FilterItem key={index} item={el}/>
          )}
      </div>
    );
  }
}

export default FilterSection;
