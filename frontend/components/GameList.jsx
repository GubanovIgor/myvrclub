import React from 'react';

// Styled Components
import { ProfileContent__Wrapper, ProfileMenu__SectionTitle } from '../stylesheets/index';

// SASS
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// Import Components
import { FilterButton } from '../stylesheets/filterItem';
import GameFilter from './GameFilter';
import Loading from './Loading';

const GameList = (props) => {
  return (
    <div>
      <ProfileMenu__SectionTitle>
        <FilterButton img={'filterSettings'} onClick={props.showFilter} />
        <h2>Игры клуба {props.club.name}</h2>
      </ProfileMenu__SectionTitle>

      <div className={cardsWrapper.container}>
        {(props.screenMode === 'desktop') && <GameFilter clubId={props.club._id} />}
        {(props.showFilterMark && props.screenMode === 'mobile') && <GameFilter clubId={props.club._id} />}
        <div className={cardsWrapper.cardsWrapper}>
          {(props.games.length !== 0) ? (props.gameItems) : (<Loading />)}
        </div>
      </div>
    </div>
)};

export default GameList;
