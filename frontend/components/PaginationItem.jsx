import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/paginationItem.module.scss'

class Pagination extends Component {
  render() {
    return(
      <div className={styles.container} onClick={() => this.props.handlePageChange(this.props.value)}>
        <div>{this.props.value}</div>
      </div>
    )
  }
}

export default Pagination;
