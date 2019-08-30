import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/map.module.scss';
import {connect} from "react-redux";

class Map extends Component {

  componentDidMount() {
    console.log(this.props.clubs);

    let baloons = [];
    this.props.clubs.forEach(el => {
      baloons.push(el.baloon);
    });

    let domains = [];
    this.props.clubs.forEach(el => {
      domains.push(el.domain);
    });

    console.log(domains);

    ymaps.ready(init);
    let myMap;

    function init() {
      myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 9,
      });

      for (let i = 0; i < baloons.length; i += 1) {
        const newPlacemark = new ymaps.Placemark(baloons[i], {
          content: 'Москва!',
          balloonContent: `<p><strong>сайт:</strong>${domains[i]}</p>`
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
