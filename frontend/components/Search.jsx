import React from 'react';

import * as Rx from "rxjs";
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {connect} from "react-redux";
import {getGamesAC} from "../redux/actions/games.js";
import {getClubsAC} from "../redux/actions/clubs.js";
import {setSearchNameAC} from "../redux/actions/search.js";

import { SearchInput } from '../stylesheets/index';


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
        <SearchInput type="text" value={search} onChange={this.onSearch}/>
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
    setSearchGameName: (name) => dispatch(setSearchNameAC(name)),
    //getAllGames: (name) => dispatch(getAllGamesAC(name)),
    getGames: (filterToggleData, pagination, clubIds, name) => dispatch(getGamesAC(filterToggleData, pagination, clubIds, name)),
    getClubs: (filterToggleData, pagination, gameIds, name) => dispatch(getClubsAC(filterToggleData, pagination, gameIds, name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);