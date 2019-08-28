import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

class FilterSection extends Component {
  render() {
    const { section } = this.props;
    return (
      <div>
        <hr className={styles.breakLine}/>
        <h3>{section.title}</h3>
        {section.value.map((item, index) =>
          <FilterItem key={index} item={item} category={section.title}/>
        )}
      </div>
    );
  }
}

export default FilterSection;
