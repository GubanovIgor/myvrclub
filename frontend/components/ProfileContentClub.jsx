import React from 'react';

// Styled Components
import { ProfileContent__Wrapper } from '../stylesheets/index';

// SASS
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// Import Components
import { FilterButton } from '../stylesheets/filterItem';
import GameFilter from './GameFilter';
import Loading from './Loading';

const ProfileContentClub = (props) => {
  return (
    <ProfileContent__Wrapper>
      <div className={cardsWrapper.titleWrapper}>
        <FilterButton img={'filterSettings'} onClick={props.showFilter} />
        <h2>Игры клуба {props.club.name}</h2>
      </div>

      <div className={cardsWrapper.container}>
        {(props.screenMode === 'desktop') && <GameFilter clubId={props.club._id} />}
        {(props.showFilterMark && props.screenMode === 'mobile') && <GameFilter clubId={props.club._id} />}
        <div className={cardsWrapper.cardsWrapper}>
          {(props.games.length !== 0) ? (props.gameItems) : (<Loading />)}
        </div>
      </div>
    </ProfileContent__Wrapper>
)};

export default ProfileContentClub;
