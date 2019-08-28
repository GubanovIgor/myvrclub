import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextInput from 'react-autocomplete-input';
//import '~react-autocomplete-input/dist/bundle.css';

// SASS
import styles from '../stylesheets/filter.module.scss';

//import AC

// import components
import FilterSection from '../components/FilterSection';
import { filterToggleAC, getClubsAC } from "../redux/actions";

class ClubFilter extends Component {
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
    this.props.getClubs(this.props.filterToggle);
  };

  render() {
    return (
      <div className={styles.container}>
        <div>
          <h3>Метро</h3>
          {/*<TextInput onRequestOptions={this.handleRequestOptions} options={this.state.options}/>*/}
          <input
            className={styles.metroInput} placeholder='охотный ряд' type='text' id='1'
          /><br></br>
        </div>
        {this.props.clubsFilter.map((el, index) =>
          <FilterSection
            key={index}
            section={el}
            onChangeCheckbox={this.onChangeCheckbox}
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
    toggle: (item, category) => dispatch(filterToggleAC(item, category)),
    getClubs: (filterToggleData) => dispatch(getClubsAC(filterToggleData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubFilter);
