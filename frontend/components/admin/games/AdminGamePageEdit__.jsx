import React, { Component } from 'react';
import Router from 'next/router'

// SASS
import styles from '../../../stylesheets/admin-page-edit.scss'
// import components

//import { getClubsAC } from '../redux/actions';
import { connect } from 'react-redux';
import { API_PREFIX } from '../../../services/consts/consts';


export default class AdminGamePageEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.game };
  }

  backHandler = () => {Router.push('/admin/games')};

  mySubmitHandler = async (event) => {
    const game = this.state;
    event.preventDefault();
    const resp = await fetch(`${API_PREFIX}/game`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({game}),
    });

    const data = await resp.json();
    if (data) alert(data.message);
    if (data.status === 'ok') this.backHandler();
  };

  render() {
    const  game  = this.state;
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
            <input style={{backgroundColor: "#e8ffec"}}
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
      <form className={styles}>
        <h1>Game {game.name}</h1>
        {itemsGame}
        <div>
          <button onClick={this.mySubmitHandler}>Записать</button>
          <button onClick={this.backHandler}>Отмена</button>
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
