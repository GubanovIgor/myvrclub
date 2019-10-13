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

class AdminClubPageEdit extends React.Component {

  state = { ...this.props.club };

  backHandler = () => {
    Router.push('/admin/clubs')
  };

  mySubmitHandler = async (event) => {
    const club = this.state;
    event.preventDefault();
    const resp = await fetch(`${API_PREFIX}/club`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ club }),
    });

    const data = await resp.json();
    if (data) alert(data.message);
    if (data.status === 'ok') this.backHandler();
  };

  render() {
    const club = this.state;
    let disabled = true;
    let multiline = false;
    //********************************* itemsClub ******************
    const itemsClub = Object.keys(club).map((key) => {
      if (Array.isArray(club[key]) && club[key][0] instanceof Object) return; //пропускаем обьекты
      if (key === '__v') return;
      (key === '_id' || key === 'gamesIds' || key === 'urlName') ? (disabled = true) : disabled = false;
      if (Array.isArray(club[key]))
        return (
          <div>
            <FormControl margin="normal" fullWidth>
              <InputLabel style={{ color: "#ff452a" }} htmlFor={key}>{key} : Array</InputLabel>
              <Input
                id={key}
                type='text'
                disabled={disabled}
                defaultValue={club[key]}
                onChange={() => this.setState({ [key]: event.target.value.split(',') })}
              />
            </FormControl>
          </div>
        );
      //************************************** socialLinks***************************
      if (key === 'socialLinks') {
        return Object.keys(club[key]).map((socialKey) => {
          return (
            <div>
              <FormControl margin="normal" fullWidth>
                <InputLabel style={{ color: "#ff452a" }}
                            htmlFor={socialKey}>{key}:{socialKey}</InputLabel>
                <Input
                  id={socialKey}
                  type='text'
                  disabled={disabled}
                  defaultValue={club[key][socialKey]}
                  onChange={() => this.setState({ club: { [key]: { [socialKey]: event.target.value } } })}
                />
              </FormControl>
            </div>
          );
        });
      }
      //***********************END socialLinks**********************************
      return ( // return во всех остальных случаях
        <div>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor={key}>{key}</InputLabel>
            <Input
              id={key}
              type='text'
              disabled={disabled}
              multiline={multiline} rows={10} // if multiline - true, then multiline field
              defaultValue={club[key]}
              onChange={() => this.setState({ [key]: event.target.value })}
            />
          </FormControl>
        </div>
      )
    });
//***************************** END itemClubs ********************************8
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}>
        <form style={{ width: "80%" }}>
          <h1>club {club.name}</h1>
          {itemsClub}
          <Button variant="contained" color="primary" size="medium"
                  onClick={this.mySubmitHandler}>
            Записать</Button>
          <Button variant="contained" color="primary" size="medium"
                  onClick={this.backHandler}>
            Отмена</Button>
        </form>

      </div>
    );
  }
}

export default AdminClubPageEdit;