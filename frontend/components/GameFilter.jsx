import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filter.module.scss';

// import components
import FilterSection from '../components/FilterSection';

class GameFilter extends Component {
  render() {
    return (
      <div className={styles.container}>
        {/*{this.props.gamesFilter.map((el, index) =>*/}
          {/*<FilterSection*/}
            {/*key={index}*/}
            {/*section={el}*/}
            {/*onChangeCheckbox={this.onChangeCheckbox}*/}
          {/*/>*/}
        {/*)}*/}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  gamesFilter: store.gamesFilter,
});

export default connect(mapStateToProps)(GameFilter);
