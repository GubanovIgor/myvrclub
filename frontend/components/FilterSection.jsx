import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

class FilterSection extends Component {

  render() {
    const { section, checked, onChangeCheckbox } = this.props;
    return (
      <div>
        <h3 className={styles.title}>{section.title}</h3>
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
        <hr className={styles.breakLine} />
      </div>
    );
  }
}

export default FilterSection;
