import React from "react";
import {API_PREFIX} from '../../../services/consts/consts';
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField
} from "@material-ui/core";
import Router from 'next/router';

class AdminGamePageEdit extends React.Component {

    state = {...this.props.game};

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
            body: JSON.stringify({game}),
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
            (key === 'description' || key === 'short_description') ? (multiline = true) : (multiline = false);
            if (Array.isArray(game[key]))
                return (
                    <div>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel style={{color: "#ff452a"}} htmlFor={key}>{key} : Array</InputLabel>
                            <Input
                                id={key}
                                type='text'
                                disabled={disabled}
                                defaultValue={game[key]}
                                onChange={() => this.setState({[key]: event.target.value.split(',')})}
                            />
                        </FormControl>
                    </div>
                );
            return (
                <div>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel htmlFor={key}>{key}</InputLabel>
                        <Input
                            id={key}
                            type='text'
                            disabled={disabled}
                            multiline={multiline} rows={5}
                            defaultValue={game[key]}
                            onChange={() => this.setState({[key]: event.target.value})}
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
                <form style={{width: "80%"}}>
                    <h1>Game {game.name}</h1>
                    {itemsGame}
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

export default AdminGamePageEdit;