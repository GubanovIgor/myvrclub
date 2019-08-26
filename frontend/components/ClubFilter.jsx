import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../stylesheets/filter.module.scss';

//import AC
import { filterClubsAC } from '../redux/actions';

// import components
import FilterSection from '../components/FilterItem';

class ClubFilter extends Component {
  onChange = (e) => {
    console.log(e.target.id);
  };

  render() {
    return (
      <div className={styles.container}>
        <div>
          <h3>Метро</h3>
          <input
            className={styles.metroInput} placeholder='охотный ряд' type='text' id='1'
          /><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <FilterSection />
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Год выхода</h3>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='12'/>
          <label htmlFor='12'>2019</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='13'/>
          <label htmlFor='13'>2018</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='14'/>
          <label htmlFor='14'>2017</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='15'/>
          <label htmlFor='15'>2016</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='16'/>
          <label htmlFor='16'>2015</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='17'/>
          <label htmlFor='17'>2014</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='18'/>
          <label htmlFor='18'>2013</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Возраст</h3>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='19'/>
          <label htmlFor='19'>0+</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='20'/>
          <label htmlFor='20'>3+</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='21'/>
          <label htmlFor='21'>7+</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='22'/>
          <label htmlFor='22'>12+</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='23'/>
          <label htmlFor='23'>16+</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='24'/>
          <label htmlFor='24'>18+</label><br></br>
        </div>
        <hr className={styles.breakLine}></hr>

        <div>
          <h3>Теги</h3>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='25'/>
          <label htmlFor='25'>Зомби</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='26'/>
          <label htmlFor='26'>Дети</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='27'/>
          <label htmlFor='27'>Музыка</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='28'/>
          <label htmlFor='28'>Много крови</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='29'/>
          <label htmlFor='29'>Магия</label><br></br>
          <input onChange={this.onChange} className={styles.filterCheckbox} type='checkbox' id='30'/>
          <label htmlFor='30'>Для взрослых</label><br></br>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  clubs: store.clubs,
});

const mapDispatchToProps = (dispatch) => ({
  filter: () => dispatch(filterClubsAC()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClubFilter);
