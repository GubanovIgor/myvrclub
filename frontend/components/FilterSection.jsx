import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

class FilterSection extends Component {

  render() {
    const { section, checked, onChangeCheckbox } = this.props;
    return (
      <div className={styles.filterSectionWrapper}>
        <div className={styles.title}>{section.title}</div>
        <div className={styles.filterSection}>
          {section.value.map((item, index) => {
            return <FilterItem
              key={index}
              item={item}
              category={section.title}
              checked={checked[section.value[index]]}
              onChangeCheckbox={onChangeCheckbox}
            />
          }
          )}
        </div>
      </div>
    );
  }
}

export default FilterSection;
