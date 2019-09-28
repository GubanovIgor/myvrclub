import React from "react";
import { API_PREFIX } from '../../../services/consts/consts';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
import Router from 'next/router';

class AdminGamePageEdit extends React.Component {

  state = { ...this.props.game };

  backHandler = () => {
    Router.push('/admin/games')
  };

  mySubmitHandler = async (event) => {
    const game = this.state;
    event.preventDefault();
    const resp = await fetch(`${API_PREFIX}/game`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ game }),
    });

    const data = await resp.json();
    if (data) alert(data.message);
    if (data.status === 'ok') this.backHandler();
  };

  render() {
    const game = this.state;
    let disabled = true;
    let multiline = false;
    const itemsGame = Object.keys(game).map((key) => {
      if (Array.isArray(game[key]) && game[key][0] instanceof Object) return; //пропускаем обьекты
      if (key === '__v') return;
      (key === '_id' || key === 'steam_appid' || key === 'clubsIds') ? (disabled = true) : disabled = false;
      (key === 'description') ? (multiline = true) : (multiline = false);
      if (Array.isArray(game[key]))
        return (
          <div>
            <FormControl margin="normal" fullWidth>
              <InputLabel style={{ color: "#ff452a" }} htmlFor={key}>{key} : Array</InputLabel>
              <Input
                id={key}
                type='text'
                disabled={disabled}
                onChange={() =>
                  this.setState({ [key]: event.target.value.split(',') })} defaultValue={game[key]}
              />
            </FormControl>
          </div>
        );
      return (
        <div>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor={key}>{key}</InputLabel>
            <Input
              type='text'
              disabled={disabled} multiline={multiline} rows={10}
              onChange={() => this.setState({ [key]: event.target.value })} defaultValue={game[key]}
            />
          </FormControl>
        </div>
      )
    });

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form style={{ width: "80%" }}>
          <h1>Game {game.name}</h1>
          {itemsGame}
          <Button variant="contained" color="primary" size="medium"
                  onClick={this.mySubmitHandler}>
            Записать</Button>
          <Button variant="contained" color="primary" size="medium"
                  onClick={this.backHandler}>
            Отмена</Button>
        </form>

        {/*<form style={{ width: "80%" }}>*/}
        {/*<h1>Contact Form</h1>*/}

        {/*<FormControl margin="normal" fullWidth>*/}
        {/*<InputLabel htmlFor="name">Name</InputLabel>*/}
        {/*<Input id="name" type="text" defaultValue={'11111'}*/}
        {/*onChange={() =>*/}
        {/*this.setState({ game:event.target.value })}*/}

        {/*/>*/}
        {/*</FormControl>*/}

        {/*<FormControl margin="normal" fullWidth>*/}
        {/*<InputLabel htmlFor="email">Email</InputLabel>*/}
        {/*<Input id="email" type="text" value={this.state.game}/>*/}
        {/*</FormControl>*/}

        {/*<FormControl margin="normal" fullWidth>*/}
        {/*<InputLabel htmlFor="email">Message</InputLabel>*/}
        {/*<Input id="email" multiline rows={10}/>*/}
        {/*</FormControl>*/}

        {/*<Button variant="contained" color="primary" size="medium">*/}
        {/*Send*/}
        {/*</Button>*/}
        {/*</form>*/}
      </div>
    );
  }
}

export default AdminGamePageEdit;