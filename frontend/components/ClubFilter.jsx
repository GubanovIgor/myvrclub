import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextInput from 'react-autocomplete-input';
//import '~react-autocomplete-input/dist/bundle.css';

// SASS
import styles from '../stylesheets/filter.module.scss';

//import AC

// import components
import FilterSection from '../components/FilterSection';

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
          <FilterSection key={index} section={el}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  clubsFilter: store.clubsFilter,
});

export default connect(mapStateToProps)(ClubFilter);
