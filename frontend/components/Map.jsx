import React, { Component } from 'react';

// Styled Components
import { ProfileContent__Wrapper, ProfileMenu__SectionTitle } from '../stylesheets/index';

// SASS
import styles from '../stylesheets/map.module.scss';
import {connect} from "react-redux";

// Import Components
import MapModal from '../components/MapModal';

class Map extends Component {

  componentDidMount() {
    console.log(this.props.club, "MAP");

    let baloons = [];
    // Подготовка балунов для всех клубов
    // this.props.club.forEach(el => {
    //   let coord = el.baloon[0].split(',');
    //   coord[0] = parseFloat(coord[0], 10);
    //   coord[1] = parseFloat(coord[1], 10);
    //   baloons.push(coord);
    // });

    //Балун для одного клуба
    let coord = this.props.club.baloon[0].split(',');
    coord[0] = parseFloat(coord[0], 10);
    coord[1] = parseFloat(coord[1], 10);
    baloons.push(coord);

    console.log(baloons);

    let domains = [];
    this.props.clubs.forEach(el => {
      domains.push(el.domain);
    });

    // console.log(domains);

    ymaps.ready(init);
    let myMap;

    function init() {
      myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 9,
      });

      for (let i = 0; i < baloons.length; i += 1) {
        const newPlacemark = new ymaps.Placemark(baloons[i], {
          // content: 'Москва!',
          // balloonContent: `<p><strong>сайт:</strong>${domains[i]}</p>`
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
      <ProfileContent__Wrapper>
        <ProfileMenu__SectionTitle>
          <h2><span>{this.props.club.name} на карте Москвы</span></h2>
        </ProfileMenu__SectionTitle>
        <div id="map" className={styles.map} club={this.props.item}/>

        <MapModal club={this.props.club}/>
      </ProfileContent__Wrapper>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    clubs: store.clubs,
  };
};

export default connect(mapStateToProps)(Map);
