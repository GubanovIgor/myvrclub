import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterSection.module.scss';

// import components
import FilterItem from '../components/FilterItem';

class FilterSection extends Component {

  render() {
    const { section } = this.props;
    console.log(this.props.checked);
    return (
      <div>
        <hr className={styles.breakLine}/>
        <h3>{section.title}</h3>
        {section.value.map((item, index) =>
          <FilterItem
            key={index}
            item={item}
            category={section.title}
            checked={this.props.checked[index]}
            onChangeCheckbox={this.props.onChangeCheckbox}
          />
        )}
      </div>
    );
  }
}

export default FilterSection;
