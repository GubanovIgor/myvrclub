import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/map.module.scss';
import {connect} from "react-redux";

class Map extends Component {
  componentDidMount() {
    ymaps.ready(init);

    function init() {
      let myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 9,
      });
    }

    // newPlacemark = new ymaps.Placemark(data[i].coord, {
    //   content: 'Москва!',
    //   balloonContent: `<p><strong>Название:</strong> ${data[i].title}</p>
    //   <p><strong>Адрес:</strong> ${data[i].address}</p>
    //   <p><strong>Стоимость:</strong> ${data[i].price} ₽/30мин</p>
    //   <a href="${data[i].site}" alt="">веб-сайт</a>
    //   <div><img class="baloon-img" src=${data[i].img}></div>`,
    // });

    // myMap.geoObjects.add(newPlacemark);
  }

  render() {
    return (
      <div id="map" className={styles.map}/>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    clubs: store.clubs,
  };
};

export default connect(mapStateToProps)(Map);
