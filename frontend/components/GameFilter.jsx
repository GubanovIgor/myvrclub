import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filter.module.scss';

// import components
import FilterSection from '../components/FilterSection';
import { filterToggleGamesAC } from '../redux/actions/filters';
import {getGamesAC} from "../redux/actions/games.js";
import GameSearch from "./Search.jsx";

class GameFilter extends Component {
  onChangeCheckbox = (item, category) => {
    this.props.toggle(item, category);
    this.props.getGames(this.props.filterToggle, undefined, this.props.clubId, this.props.searchGameName);
    console.log('this.props.searchGameName', this.props.searchGameName)
    this.forceUpdate()
  };

  // shouldComponentUpdate = () => {
  //   this.props.getGames(this.props.filterToggle, undefined, this.props.clubId);
  // }

  render() {
    return (
      <div className={styles.container}>
        <GameSearch isGame={true}/>
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
  searchGameName: store.searchGameName
});

function mapDispatchToProps(dispatch) {
  return {
    toggle: (item, category) => dispatch(filterToggleGamesAC(item, category)),
    getGames: (filterToggleData, pagination, clubId, name) => dispatch(getGamesAC(filterToggleData, pagination, clubId, name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameFilter);
