import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filter.module.scss';

//import AC

// import components
import FilterSection from '../components/FilterSection';

class ClubFilter extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h3>Метро</h3>
          <input
            className={styles.metroInput} placeholder='охотный ряд' type='text' id='1'
          /><br></br>
        </div>
        {this.props.filter.map((el, index) =>
          <FilterSection key={index} el={el}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  filter: store.filter,
});

export default connect(mapStateToProps)(ClubFilter);
