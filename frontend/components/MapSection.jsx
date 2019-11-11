import React, {Component} from 'react';
import {connect} from "react-redux";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {IMG_URL_PREFIX, API_PREFIX_FRONT} from '../services/consts/consts';

// Import AC
import {getClubsForMapAC, getClubForMapAC} from "../redux/actions/clubs.js";

// Styled Components
import {ProfileMenu__SectionTitle} from '../stylesheets/index';

// SASS
import styles from '../stylesheets/mapSection.module.scss';

class MapSection extends Component {

  componentDidMount = () => {
    (this.props.club) ?
      this.props.getClubForMap(this.props.club._id) :
      this.props.getClubsForMap(this.props.filterToggle)
  };

  // componentDidUpdate = () => {
  //   (this.props.club) ?
  //   this.props.getClubForMap(this.props.club._id) :
  //   this.props.getClubsForMap(this.props.filterToggle)
  // }

  render() {
    const mapData = {
      center: [55.751574, 37.573856],
      zoom: 9,
    };
    {this.props.clubsForMap.map((club) =>{console.log(club.name, club.baloon)})}
    return (
      <div>
        {(this.props.club) &&
        <ProfileMenu__SectionTitle>
          <h2><span>{this.props.club.name} на карте Москвы</span></h2>
        </ProfileMenu__SectionTitle>}
        <YMaps>
          <Map defaultState={mapData} className={styles.map}>
            {this.props.clubsForMap.map((club) =>
              <Placemark geometry={club.baloon}
                         key={club._id}
                         properties={{
                           hintContent: `${club.name}`,
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
                         }}
                         modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}/>)}
          </Map>
        </YMaps>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    clubsForMap: store.clubsForMap,
    filterToggle: store.clubsFilterToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClubsForMap: (filterToggleData) => dispatch(getClubsForMapAC(filterToggleData)),
    getClubForMap: (clubId) => dispatch(getClubForMapAC(clubId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapSection);
