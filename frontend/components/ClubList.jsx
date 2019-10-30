import React from 'react';

// Styled Components
import { ProfileContent__Wrapper } from '../stylesheets/index';

// SASS
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// Import Components
import { FilterButton } from '../stylesheets/filterItem';
import ClubFilter from './ClubFilter';
import Loading from './Loading';

const ClubList = (props) => {
  return (
    <ProfileContent__Wrapper>
      <div className={cardsWrapper.titleWrapper}>
        <FilterButton img={'filterSettings'} onClick={props.showFilter} />
        <h2>Где поиграть в {props.game.name}</h2>
      </div>

      <div className={cardsWrapper.container}>
        {(props.screenMode === 'desktop') && <ClubFilter gameId={props.game._id} />}
        {(props.showFilter && props.screenMode === 'mobile') && <ClubFilter gameId={props.game._id} />}
        <div className={cardsWrapper.cardsWrapper}>
          {(props.clubs.length !== 0) ? (props.clubItems) : (<Loading />)}
        </div>
      </div>
    </ProfileContent__Wrapper>
  )
};

export default ClubList;