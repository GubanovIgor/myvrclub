import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filter.module.scss';

// import components
import FilterSection from '../components/FilterSection';
import { filterToggleGamesAC, getGamesAC } from '../redux/actions';

class GameFilter extends Component {
  onChangeCheckbox = (item, category) => {
    this.props.toggle(item, category);
    this.props.getGames(this.props.filterToggle, undefined, this.props.clubId);
  };

  render() {
    return (
      <div className={styles.container}>
        {this.props.gamesFilter.map((el, index) =>
          <FilterSection
            key={index}
            section={el}
            onChangeCheckbox={this.onChangeCheckbox}
            checked={this.props.filterToggle[el.title]}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  gamesFilter: store.gamesFilter,
  filterToggle: store.gamesFilterToggle,
});

function mapDispatchToProps(dispatch) {
  return {
    toggle: (item, category) => dispatch(filterToggleGamesAC(item, category)),
    getGames: (filterToggleData, pagination, clubId) => dispatch(getGamesAC(filterToggleData, pagination, clubId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameFilter);
