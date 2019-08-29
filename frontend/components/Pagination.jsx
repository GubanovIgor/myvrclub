import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/pagination.module.scss'

// import components
import PaginationItem from './PaginationItem';

class Pagination extends Component {
  render() {
    return(
      <div className={styles.container}>
        <PaginationItem value={1} handlePageChange={this.props.handlePageChange}/>
        <PaginationItem value={2} handlePageChange={this.props.handlePageChange}/>
        <PaginationItem value={3} handlePageChange={this.props.handlePageChange}/>
        <PaginationItem value={4} handlePageChange={this.props.handlePageChange}/>
      </div>
    )
  }
}

export default Pagination;
