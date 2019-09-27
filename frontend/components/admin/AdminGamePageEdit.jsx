import React, { Component } from 'react';

// SASS
import styles from '../../stylesheets/admin-page-edit.scss'
// import components

//import { getClubsAC } from '../redux/actions';
import { connect } from 'react-redux';
import { API_PREFIX } from '../../services/consts/consts';


export default class AdminGamePageEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.game
      // name: props.game.name,
      // steam_appid: props.game.steam_appid,
      // urlName: props.game.urlName,
      // description: props.game.description,
      // short_description: props.game.short_description,
      // clubs: props.game.clubs,
      // clubsIds: props.game.clubsIds,
      // cover: props.game.cover,
      // screenShot: props.game.screenShot,
      // videos: props.game.videos,
      // genre: props.game.genre,
      // playersNum: props.game.playersNum,
      // platform: props.game.platform,
      // os: props.game.os,
      // language: props.game.language,
      // year: props.game.year,
      // developer: props.game.developer,
      // publisher: props.game.publisher,
      // ageLimit: props.game.ageLimit,
      // rating: props.game.rating,
      // tags: props.game.tags,
      // website: props.game.website,
      // duration: props.game.duration
    };
  }

  mySubmitHandler = async (event) => {
    event.preventDefault();
    const resp = await fetch(`${API_PREFIX}/game/update/${this.props.game._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    });
    const data = await resp.json();
    if (data) alert( data );
  };


  render() {
    const { game = [] } = this.props;
    let readOnly = true;
    const itemsGame = Object.keys(game).map((key) => {
      if (Array.isArray(game[key]) && game[key][0] instanceof Object) return;
      if (key === '__v') return;
      if (key === '_id' || key === 'steam_appid'|| key === 'clubsIds') readOnly = true;
      else readOnly = false;
      if (Array.isArray(game[key]))
        return (
          <div>
            {key} : Array
            <input
              type='text'
              readOnly={readOnly}
              onChange={() =>
                this.setState({ [key]: event.target.value.split(',') })} defaultValue={game[key]}
            />
          </div>
        );
      return (
        <div>
          {key} :
          <input
            type='text'
            readOnly={readOnly}
            onChange={() => this.setState({ [key]: event.target.value })} defaultValue={game[key]}
          />
        </div>
      )
    });
    return (
      <form className={styles}
            onSubmit={this.mySubmitHandler}>
        <h1>Game {game.name}</h1>
        {itemsGame}
        <div>
          <input type='submit'/>
        </div>
      </form>
    );
  }
}

// const mapStateToProps = (store) => {
//   return {
//     clubs: store.clubs,
//     loading: store.loading,
//     error: store.error,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getClubs: (filterToggleData, pagination, gameId) => dispatch(getClubsAC(filterToggleData, pagination, gameId)),
//   }

// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(AdminGamePageEdit);
