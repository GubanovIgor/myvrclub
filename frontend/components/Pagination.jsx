import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/pagination.module.scss';

// import components

class Pagination extends Component {
  render() {
    return(
      <div className={styles.container}>
        <button onClick={this.props.handlePageChange}>Загрузить ещё</button>
      </div>
    )
  }
}

export default Pagination;
