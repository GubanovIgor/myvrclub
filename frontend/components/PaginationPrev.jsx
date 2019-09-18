import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/paginationItem.module.scss'

class PaginationPrev extends Component {
	render() {
		return (
			<div className={styles.container} onClick={this.props.prevPage}>
				<svg width="12px" height="12px" viewBox="0 0 46 46">
						<g className={styles.paginationArrow}>
							<path
								d="M31.3,0c1.4,0,2.8,0.5,3.9,1.6c2.3,2.2,2.4,5.8,0.2,8.1L22.6,23l12.7,13.3c2.2,2.3,2.1,5.9-0.2,8.1
								c-2.3,2.2-5.9,2.1-8.1-0.2L10.6,27c-2.1-2.2-2.1-5.7,0-7.9L27.1,1.8C28.3,0.6,29.8,0,31.3,0z"
							/>
						</g>
				</svg>
      </div >
    )
	}
}

export default PaginationPrev;