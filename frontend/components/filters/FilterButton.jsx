import React from 'react';

//SASS
import styles from '../../stylesheets/filterButton.module.scss';

// import components

const FilterButton = (props) => (
  <button onClick={props.showFilter} className={styles.filterButton}>
    <svg width="18px" height="18px" viewBox="0 0 60 48">
      <g className={styles.filterIcon}>
        <path d="M41.08,48H2c-0.553,0-1,0.448-1,1s0.447,1,1,1h39.08c0.488,3.387,3.401,6,6.92,6c3.859,0,7-3.14,7-7s-3.141-7-7-7   C44.481,42,41.568,44.613,41.08,48z" />
        <path d="M20.695,27H2c-0.553,0-1,0.448-1,1s0.447,1,1,1h18.632c0.396,3.602,3.456,6.414,7.161,6.414s6.765-2.812,7.161-6.414H54   c0.553,0,1-0.448,1-1s-0.447-1-1-1H34.891c-0.577-3.4-3.536-6-7.098-6S21.272,23.6,20.695,27z" />
        <path d="M8,0C4.141,0,1,3.14,1,7s3.141,7,7,7c3.519,0,6.432-2.613,6.92-6H54c0.553,0,1-0.448,1-1s-0.447-1-1-1H14.92   C14.432,2.613,11.519,0,8,0z" />
      </g>
    </svg>
  </button>
);

export default FilterButton;