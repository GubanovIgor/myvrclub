import React, { Component } from 'react';
import { connect } from "react-redux";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { IMG_URL_PREFIX, API_PREFIX_FRONT } from '../services/consts/consts';

// Styled Components
import { ProfileMenu__SectionTitle, MapModal__Wrapper } from '../stylesheets/index';

// Import Components
import MapModal from './MapModal';

// SASS
import styles from '../stylesheets/mapSection.module.scss';

class MapSection extends Component {
  test = () => {
    console.log('hui')
  }

  render() {

    const mapData = {
      center: [55.751574, 37.573856],
      zoom: 9,
    };

    let baloons = [];
    this.props.clubsForMap.forEach(el => {
      let coord = el.baloon[0].split(',');
      coord[0] = parseFloat(coord[0], 10);
      coord[1] = parseFloat(coord[1], 10);
      baloons.push(coord);
    });

    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small"
      }
    });

    console.log(this.props.clubsForMap);

    return (
      <div>
        {(this.props.club) &&
          <ProfileMenu__SectionTitle>
            <h2><span>{this.props.club.name} на карте Москвы</span></h2>
          </ProfileMenu__SectionTitle>}

        <YMaps>
          <Map state={mapData} className={styles.map}>
            {this.props.clubsForMap.map((club, index) => <Placemark onClick={this.test} geometry={baloons[index]} key={index} properties={{
              hintContent: 'Это хинт',
              balloonContent: `<div style='width: 200px; margin-bottom: 5px;'>
                                  <p style='text-align: left'><strong>${club.name}</strong></p>
                                  <img style='width: 200px;' src=${IMG_URL_PREFIX + club.cover}>
                                  <p style='white-space: pre-wrap; text-align: left; margin: 0; margin-bottom: 5px;'><strong>Адрес:</strong> ${club.address}</p>
                                  <p style='white-space: pre-wrap; text-align: left; margin: 0; margin-bottom: 5px;'><strong>Стоимость:</strong> от ${club.price} ₽/30мин</p>
                                  <a style='width: 80px;
                                            height: 35px;
                                            padding: 5px;
                                            border-radius: 2px;
                                            background-color: #338EEE;
                                            color: #FFF;
                                            &:hover {opacity: 0.8;}' href='${API_PREFIX_FRONT}/clubs/${club.urlName}' alt="">Подробнее</a>
                                </div>`
            }} modules={['geoObject.addon.balloon', 'geoObject.addon.hint']} />)}
          </Map>
        </YMaps>
        {/* <MapModal club={this.props.clubsForMap[0]}/> */}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    clubsForMap: store.clubsForMap,
  };
};

export default connect(mapStateToProps)(MapSection);
