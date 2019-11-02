import React, { Component } from 'react';
import {connect} from "react-redux";

// Styled Components
import { ProfileContent__Wrapper, ProfileMenu__SectionTitle, MapContainer } from '../stylesheets/index';

// Import Components
import MapModal from './MapModal';
import Loading from './Loading';

// action creators
import { getClubsForMapAC, getClubsAC } from '../redux/actions/clubs';

class Map extends Component {

  componentDidMount = () => {
    // console.log(this.props.club, "MAP");
    // this.props.getClubsForMap();
    console.log(this.props.clubsForMap, "MAP");
    let baloons = [];
    // Подготовка балунов для всех клубов
    this.props.clubsForMap.forEach(el => {
      let coord = el.baloon[0].split(',');
      coord[0] = parseFloat(coord[0], 10);
      coord[1] = parseFloat(coord[1], 10);
      baloons.push(coord);
    });

    //Балун для одного клуба
    // let coord = this.props.club.baloon[0].split(',');
    // coord[0] = parseFloat(coord[0], 10);
    // coord[1] = parseFloat(coord[1], 10);
    // baloons.push(coord);

    // console.log(baloons);

    let domains = [];
    this.props.clubsForMap.forEach(el => {
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
      <div>
        <ProfileMenu__SectionTitle>
          {(this.props.club) &&
            <h2><span>{this.props.club.name} на карте Москвы</span></h2>
          }
        </ProfileMenu__SectionTitle>
        {console.log(this.props.clubsForMap, 'CLUBS')}

        {/* {(this.props.clubs.length !== 0) ?
        <MapContainer id="map" className={styles.map} club={this.props.item}/> :
        (<Loading />)} */}

        <MapContainer id="map" club={this.props.item}/>
        {/* {(!this.state.mapRender && <Loading />)} */}
        {/* <MapModal club={this.props.club}/> */}
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
