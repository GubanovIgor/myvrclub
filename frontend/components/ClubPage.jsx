import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styled Components
import { ProfileContent } from '../stylesheets/index';

// import components
import GameCard from '../components/GameCard';
import Reviews from '../components/Reviews';
import ClubProfile from '../components/ClubProfile';
import GameList from './GameList';
import ProfileMenu from './ProfileMenu';
import Map from '../components/Map';
import Equipments from '../components/Equipments';

// action creators
import { showFilterToggleAC } from '../redux/actions/filters';
import { getGamesAC } from "../redux/actions/games.js";

class ClubPage extends Component {
  state = {
    menuSection: 'Игры клуба',
  }

  showFilter = () => {
    this.props.showFilterToggle();
  };

  menuToggle = (menuSection) => {
    this.setState({ menuSection: menuSection });
  }

  paginationHandler = () => {
    this.props.autoPagination('game', this.props.club._id);
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    await this.props.getGames(this.props.filterToggle, undefined, this.props.club._id);
  }

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  }

  render() {
    const { club, games, showFilter, screenMode } = this.props;
    const gameItems = games.map((game) => {
      return <GameCard key={game._id} game={game} />;
    });

    const menuItems = [
      'Игры клуба',
      'Отзывы',
      'Оборудование',
      'На карте',
    ];

    return (
      <main>
        <ClubProfile club={club} />
        <ProfileMenu menuToggle={this.menuToggle}
          menuSection={this.state.menuSection}
          menuItems={menuItems} />

        <ProfileContent>
          {(this.state.menuSection === 'Игры клуба') &&
            <GameList showFilterMark={showFilter}
              showFilter={this.showFilter}
              club={club}
              screenMode={screenMode}
              games={games}
              gameItems={gameItems} />}

          {(this.state.menuSection === 'Отзывы') &&
            <Reviews item={club} />}

          {(this.state.menuSection === 'На карте') &&
            <Map  club={club}/>}

          {(this.state.menuSection === 'Оборудование') &&
            <Equipments  item={club}/>}
        </ProfileContent>
      </main>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    showFilter: store.showFilter,
    games: store.games,
    screenMode: store.screenMode,
    filterToggle: store.gamesFilterToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getGames: (filterToggleData, pagination, clubId) => dispatch(getGamesAC(filterToggleData, pagination, clubId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubPage);
