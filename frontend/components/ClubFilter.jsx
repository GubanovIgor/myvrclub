import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextInput from 'react-autocomplete-input';
//import '~react-autocomplete-input/dist/bundle.css';

// SASS
import styles from '../stylesheets/filter.module.scss';

//import AC
import { changeMapAC, offChangeMapAC } from '../redux/actions';

// import components
import FilterSection from '../components/FilterSection';
import {filterToggleClubsAC, getClubsAC} from "../redux/actions";

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
        <div>
          <h3>Показывать</h3>
          {/*/!*<TextInput onRequestOptions={this.handleRequestOptions} options={this.state.options}/>*!/*/}
          {/*<input*/}
            {/*className={styles.metroInput} placeholder='охотный ряд' type='text' id='1'*/}
          {/*/><br></br>*/}
          <div>
            <input onClick={this.offChangeMap} type="radio" id="huey" name="drone" value="huey"
                   />
              <label htmlFor="huey">По рейтингу</label>
          </div>

          <div>
            <input onClick={this.onChangeMap} type="radio" id="dewey" name="drone" value="dewey"/>
              <label htmlFor="dewey">На карте</label>
          </div>
        </div>
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
