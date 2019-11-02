import React, { Component } from 'react';
import { connect } from "react-redux";

// Styled Components
import { ProfileContent__Wrapper, ProfileMenu__SectionTitle, MapContainer } from '../stylesheets/index';

// Import Components
import MapModal from './MapModal';
import Loading from './Loading';

// action creators
import { getClubsForMapAC, getClubsAC } from '../redux/actions/clubs';

class Map extends Component {

  componentDidMount = () => {
    // Подготовка балунов для всех клубов
    let baloons = [];
    this.props.clubsForMap.forEach(el => {
      let coord = el.baloon[0].split(',');
      coord[0] = parseFloat(coord[0], 10);
      coord[1] = parseFloat(coord[1], 10);
      baloons.push(coord);
    });

    let domains = [];
    this.props.clubsForMap.forEach(el => {
      domains.push(el.domain);
    });

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
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        {(this.props.club) &&
          <ProfileMenu__SectionTitle>
            <h2><span>{this.props.club.name} на карте Москвы</span></h2>
          </ProfileMenu__SectionTitle>}

        {(this.props.clubsForMap) && <MapContainer id="map" />}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    clubsForMap: store.clubsForMap,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getClubsForMap: () => dispatch(getClubsForMapAC()),
    // getClubs: (filterToggleData, pagination, clubId) => dispatch(getClubsAC(filterToggleData, pagination, clubId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
