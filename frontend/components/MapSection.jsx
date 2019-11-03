import React, { Component } from 'react';
import { connect } from "react-redux";
import { YMaps, Map, Placemark } from 'react-yandex-maps';

// Styled Components
import { ProfileMenu__SectionTitle } from '../stylesheets/index';

// SASS
import styles from '../stylesheets/mapSection.module.scss';

class MapSection extends Component {
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

    return (
      <div>
        {(this.props.club) &&
          <ProfileMenu__SectionTitle>
            <h2><span>{this.props.club.name} на карте Москвы</span></h2>
          </ProfileMenu__SectionTitle>}

        <YMaps>
          <Map defaultState={mapData} className={styles.map}>
            {baloons.map((baloon, index) => <Placemark geometry={baloon} key={index}/>)}
          </Map>
        </YMaps>
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
