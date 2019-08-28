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
    const { item, checked } = this.props;
    return (
      <div>
        <input
          onChange={this.onChangeCheckbox}
          className={styles.filterCheckbox}
          checked={checked}
          type='checkbox'
          id={item}
        />
        <label htmlFor={item}>{item}</label><br/>
      </div>
    );
  }
}

function mapStateToProps(store, props) { // Галочки не убираются после перехода на другую страгицу
  return {
    filterToggle: store.clubsFilterToggle,
    checked: store.clubsFilterToggle[props.category][props.item]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggle: (item, category) => dispatch(filterToggleAC(item, category)),
    getClubs: (filterToggleData) => dispatch(getClubsAC(filterToggleData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem);
