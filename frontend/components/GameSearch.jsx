import React from 'react';

import * as Rx from "rxjs";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {connect} from "react-redux";
import {getAllGamesAC} from "../redux/actions/games.js";


const onSearch$ = new Rx.Subject().pipe(
  debounceTime(700),
  distinctUntilChanged()
);

class GameSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      debouncedVal: '',
    };
  }

  componentDidMount(){
    this.subscription = onSearch$.subscribe(debouncedVal => this.props.getAllGames(debouncedVal));
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearch = (e) => {
    const search = e.target.value;
    this.setState({ search });
    onSearch$.next(search);
  }

  render() {
    const { search, debouncedVal } = this.state;
    return (
      <div>
        <input type="text" value={search} onChange={this.onSearch} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    games: store.games,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllGames: (name) => dispatch(getAllGamesAC(name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSearch);