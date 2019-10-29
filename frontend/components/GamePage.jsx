import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styled Components
import { ProfileContent } from '../stylesheets/index';

// Import Components
import ClubCard from '../components/ClubCard';
import GameProfile from '../components/GameProfile';
import ProfileContentGame from './ProfileContentGame';
import ProfileMenu from './ProfileMenu';
// import Map from '../components/Map';
// import Reviews from '../components/Reviews';

// Action Creators
import { showFilterToggleAC } from '../redux/actions/filters';
import { getClubsAC } from "../redux/actions/clubs.js";

class GamePage extends Component {
  state = {
    menuSection: 'Где поиграть',
  }

  showFilter = () => {
    this.props.showFilterToggle();
  };

  menuToggle = (menuSection) => {
    this.setState({menuSection: menuSection});
  }

  paginationHandler = () => {
    this.props.autoPagination('club', this.props.game._id);
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.paginationHandler);
    await this.props.getClubs(this.props.filterToggle, undefined, this.props.game._id);
  }

  componentWillUnmount = async () => {
    window.removeEventListener('scroll', this.paginationHandler);
    this.props.autoPagination(false);
  }

  render() {
    const { game = [], clubs, screenMode, showFilter } = this.props;
    const clubItems = clubs.map((club) => <ClubCard key={club._id} club={club} />);

    const menuItems = [
      'Где поиграть',
      'Отзывы',
      'Оборудование',
    ];

    return (
      <main>
        <GameProfile game={game} />
        <ProfileMenu menuToggle={this.menuToggle}
                      menuSection={this.state.menuSection}
                      menuItems={menuItems}/>

        {/* {(this.props.loading) ? <Map/> : (<Loading />)} */}
        {/* <Map/> */}
        <ProfileContent>
          <ProfileContentGame showFilterMark={showFilter}
            showFilter={this.showFilter}
            game={game}
            screenMode={screenMode}
            clubs={clubs}
            clubItems={clubItems} />
        </ProfileContent>

        {/* <hr className={styles.breakLine}/> */}
        {/* <Reviews /> */}
      </main>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    showFilter: store.showFilter,
    clubs: store.clubs,
    screenMode: store.screenMode,
    filterToggle: store.clubsFilterToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFilterToggle: () => dispatch(showFilterToggleAC()),
    getClubs: (filterToggleData, pagination, gameId) => dispatch(getClubsAC(filterToggleData, pagination, gameId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
