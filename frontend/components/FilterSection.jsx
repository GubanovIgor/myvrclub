import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

class FilterSection extends Component {

  render() {
    const { section, checked, onChangeCheckbox } = this.props;
    // console.log(this.props.checked['Action'])
    // console.log(this.props.section.value[0])
    return (
      <div>
        <h3>{section.title}</h3>
        {section.value.map((item, index) => {
          // console.log(this.props, 'FilterSection')
          return <FilterItem
            key={index}
            item={item}
            category={section.title}
            checked={checked[section.value[index]]}
            onChangeCheckbox={onChangeCheckbox}
          />}
        )}
        <hr className={styles.breakLine}/>
      </div>
    );
  }
}

export default FilterSection;
