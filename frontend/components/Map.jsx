import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/map.module.scss';

class Map extends Component {
  componentDidMount() {
    ymaps.ready(init);

    function init() {
      let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 9,
      });
    }
  }

  render() {
    return (
      <div id="map" className={styles.map}/>
    )
  }
}

export default Map;
