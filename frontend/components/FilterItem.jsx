import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filterItem.module.scss';

// import components
import { filterToggleAC, getClubsAC } from '../redux/actions';

class FilterItem extends Component {

  onChangeCheckbox = (e) => {
    this.props.toggle(e.target.id, this.props.category);
    this.props.getClubs(this.props.filterToggle);
  };

  render() {
    const { item, category } = this.props;
    return (
      <div>
        <input onChange={this.onChangeCheckbox} className={styles.filterCheckbox} type='checkbox' id={item}/>
        <label htmlFor={item}>{item}</label><br></br>
      </div>
    );
  }
}

function mapStateToProps(store) { // Сделать получение галочек из стора
  return {
    filterToggle: store.filterToggle,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: (item, category) => dispatch(filterToggleAC(item, category)),
    getClubs: (filterToggleData) => dispatch(getClubsAC(filterToggleData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
