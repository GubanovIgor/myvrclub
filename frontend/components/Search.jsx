import React from 'react';

import * as Rx from "rxjs";
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {connect} from "react-redux";
import {getGamesAC, setSearchGameNameAC} from "../redux/actions/games.js";
import {getClubsAC} from "../redux/actions/clubs.js";


const onSearch$ = new Rx.Subject().pipe(
  debounceTime(600),
  distinctUntilChanged()
);

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.subscription = onSearch$.subscribe(searchData =>
      this.onChangeSearchData(searchData))
    //this.props.setSearchGameName(searchData));
    //this.props.getGames(this.props.filterToggle, undefined, undefined, searchData));
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onChangeSearchData = (name) => {
    this.props.setSearchGameName(name);
    this.props.isGame && this.props.getGames(this.props.filterToggle, undefined, undefined, name);
    this.props.isClub && this.props.getClubs(this.props.filterToggle, undefined, undefined, name);
  };

  onSearch = (e) => {
    const search = e.target.value;
    this.setState({search});
    onSearch$.next(search);
  };

  render() {
    const {search} = this.state;
    return (
      <div>
        <input type="text" value={search} onChange={this.onSearch} placeholder={'поиск...'}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    filterToggle: store.gamesFilterToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchGameName: (name) =>
      dispatch(setSearchGameNameAC(name)),
    getGames: (filterToggleData, pagination, clubId, name) =>
      dispatch(getGamesAC(filterToggleData, pagination, clubId, name)),
    getClubs: (filterToggleData, pagination, gameId, name) =>
      dispatch(getClubsAC(filterToggleData, pagination, gameId, name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);