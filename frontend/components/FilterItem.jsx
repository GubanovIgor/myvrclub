import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filterItem.module.scss';

// import components
import { filterToggleAC } from '../redux/actions';

class FilterItem extends Component {

  onChange = (e) => {
    this.props.toggle(e.target.id, this.props.category);
  };

  render() {
    const { item, category } = this.props;
    return (
      <div>
        <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id={item}/>
        <label htmlFor={item}>{item}</label><br></br>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: (item, category) => dispatch(filterToggleAC(item, category)),
  };
}

export default connect(null, mapDispatchToProps)(FilterItem);
