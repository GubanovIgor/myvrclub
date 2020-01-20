import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextInput from 'react-autocomplete-input';
//import '~react-autocomplete-input/dist/bundle.css';

// SASS
import styles from '../stylesheets/filter.module.scss';

//import AC
import { changeMapAC, offChangeMapAC } from '../redux/actions/map';
import { filterToggleClubsAC } from '../redux/filters/actions.js';
import { getClubsAC, getClubsForMapAC } from "../redux/clubs/actions.js";

// import components
import FilterSection from '../components/FilterSection';
import MapRatingToggle from '../components/MapRatingToggle'

// Styled Components
import {
  FilterSectionWrapper,
  FilterSectionWrapper__Title,
} from '../stylesheets/index';
import Search from "./Search.jsx";
//import MapRatingToggle from '../components/MapRatingToggle'

class ClubFilter extends Component {

  // Заготовка для поиска по метро
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { options: ["apple", "apricot", "banana", "carrot"] };
  // }
  // handleRequestOptions = (part) => {
  //   console.log(part);          // -> "ap", which is part after trigger "@"
  //   //this.setState({ options: SOME_NEW_OPTION_ARRAY });
  // }

  // Метод для передачи изменений чекбоксов фильтра в стор
  onChangeCheckbox = (item, category) => {
    this.props.toggle(item, category);
    this.props.getClubsForMap(this.props.filterToggle);
    this.props.getClubs(this.props.filterToggle, undefined, this.props.gameId,  this.props.SearchName);
    console.log('this.props.SearchName', this.props.SearchName)
    this.forceUpdate()
  };

  changeMapHandler = () => {
    console.log('hui')
    this.props.changeMap();
  };

  render() {
    return (
      <div className={styles.container}>

        <FilterSectionWrapper>
          <FilterSectionWrapper__Title>
            Рейтинг / Карта
          </FilterSectionWrapper__Title>
          <MapRatingToggle changeMapHandler={this.changeMapHandler} map={this.props.map}/>
        </FilterSectionWrapper>

        <Search isClub={true}/>
        {/* <MapRatingToggle /> */}
        {/* {(this.props.screenMode === 'desktop') && <hr className={styles.breakLine}/>} */}
        {this.props.clubsFilter.map((el, index) =>
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
  clubsFilter: store.filter.clubsFilter,
  filterToggle: store.filter.clubsFilterToggle,
  screenMode: store.screenMode,
  map: store.map,
  SearchName: store.SearchName
});

function mapDispatchToProps(dispatch) {
  return {
    getClubsForMap: (filterToggleData) => dispatch(getClubsForMapAC(filterToggleData)),
    toggle: (item, category) => dispatch(filterToggleClubsAC(item, category)),
    getClubs: (filterToggleData, pagination, gameId, name) => dispatch(getClubsAC(filterToggleData, pagination, gameId, name)),
    changeMap: () => dispatch(changeMapAC()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubFilter);
