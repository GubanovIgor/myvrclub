import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filter.module.scss';

// import components
import FilterSection from '../components/FilterSection';
import { filterToggleGamesAC } from '../redux/actions/filters';
import { getGamesAC } from "../redux/actions/games.js";
import Search from "./Search.jsx";

// Styled Components
import {
  FilterSectionWrapper,
  FilterSectionWrapper__Title,
} from '../stylesheets/index';

class GameFilter extends Component {
  onChangeCheckbox = (item, category) => {
    this.props.toggle(item, category);
    this.props.getGames(this.props.filterToggle, undefined, this.props.clubId, this.props.SearchName);
    this.forceUpdate()
  };

  // shouldComponentUpdate = () => {
  //   this.props.getGames(this.props.filterToggle, undefined, this.props.clubId);
  // }

  render() {
    return (
      <div className={styles.container}>
        <FilterSectionWrapper>
          <FilterSectionWrapper__Title>
            Поиск игр
          </FilterSectionWrapper__Title>
          <Search isGame={true} />
        </FilterSectionWrapper>
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
  SearchName: store.SearchName
});

function mapDispatchToProps(dispatch) {
  return {
    toggle: (item, category) => dispatch(filterToggleGamesAC(item, category)),
    getGames: (filterToggleData, pagination, clubId, name) => dispatch(getGamesAC(filterToggleData, pagination, clubId, name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameFilter);
