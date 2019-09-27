import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextInput from 'react-autocomplete-input';
//import '~react-autocomplete-input/dist/bundle.css';

// SASS
import styles from '../stylesheets/filter.module.scss';

//import AC
import { changeMapAC, offChangeMapAC, getClubsAC, filterToggleClubsAC } from '../redux/actions';

// import components
import FilterSection from '../components/FilterSection';
import MapRatingToggle from '../components/MapRatingToggle'

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
    this.props.getClubs(this.props.filterToggle, undefined, this.props.gameId);
  };

  onChangeMap = () => {
    this.props.changeMap();
  };

  offChangeMap = () => {
    this.props.offChangeMap();
  }

  render() {
    return (
      <div className={styles.container}>
        <MapRatingToggle />
        {(this.props.screenMode === 'desktop') && <hr className={styles.breakLine}/>}
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
  clubsFilter: store.clubsFilter,
  filterToggle: store.clubsFilterToggle,
  screenMode: store.screenMode,
});

function mapDispatchToProps(dispatch) {
  return {
    toggle: (item, category) => dispatch(filterToggleClubsAC(item, category)),
    getClubs: (filterToggleData, pagination, gameId) => dispatch(getClubsAC(filterToggleData, pagination, gameId)),
    changeMap: () => dispatch(changeMapAC()),
    offChangeMap: () => dispatch(offChangeMapAC()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubFilter);
