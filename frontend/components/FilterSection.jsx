import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

// Styled Components
import {
  FilterSectionWrapper,
  FilterSectionWrapper__Title,
} from '../stylesheets/index';

class FilterSection extends Component {

  render() {
    const { section, checked, onChangeCheckbox } = this.props;
    return (
      <FilterSectionWrapper>
        <FilterSectionWrapper__Title>
          {section.title}
        </FilterSectionWrapper__Title>
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
      </FilterSectionWrapper>
    );
  }
}

export default FilterSection;
