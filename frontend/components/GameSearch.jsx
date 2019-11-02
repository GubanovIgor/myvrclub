import React from 'react';

import * as Rx from "rxjs";
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {connect} from "react-redux";
import {getAllGamesAC, getGamesAC, setSearchGameNameAC} from "../redux/actions/games.js";
import {showFilterToggleAC} from "../redux/actions/filters.js";


const onSearch$ = new Rx.Subject().pipe(
  debounceTime(600),
  distinctUntilChanged()
);

class GameSearch extends React.Component {
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
    this.props.getGames(this.props.filterToggle, undefined, undefined, name);
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
        <input type="text" value={search} onChange={this.onSearch}/>
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
    setSearchGameName: (name) => dispatch(setSearchGameNameAC(name)),
    //getAllGames: (name) => dispatch(getAllGamesAC(name)),
    getGames: (filterToggleData, pagination, clubId, name) => dispatch(getGamesAC(filterToggleData, pagination, clubId, name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameSearch);