import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/map.module.scss';
import {connect} from "react-redux";

class Map extends Component {
  componentDidMount() {
    console.log(this.props);
    ymaps.ready(init);
    let myMap;

    function init() {
      myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 9,
      });
      for (let i = 0; i < 1; i += 1) {
        const newPlacemark = new ymaps.Placemark([55.708939, 37.592956], {
          content: 'Москва!',
          // balloonContent: `<p><strong>Название:</strong> ${data[i].title}</p>
          // <p><strong>Адрес:</strong> ${data[i].address}</p>
          // <p><strong>Стоимость:</strong> ${data[i].price} ₽/30мин</p>
          // <a href="${data[i].site}" alt="">веб-сайт</a>
          // <div><img class="baloon-img" src=${data[i].img}></div>`,
        });

        myMap.geoObjects.add(newPlacemark);
      }
    }
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
