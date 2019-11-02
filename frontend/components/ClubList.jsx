import React from 'react';

// Styled Components
import { ProfileContent__Wrapper } from '../stylesheets/index';

// SASS
import cardsWrapper from '../stylesheets/cardsWrapper.module.scss';

// Import Components
import { FilterButton } from '../stylesheets/filterItem';
import ClubFilter from './ClubFilter';
import ClubCards from './ClubCards';

const ClubList = (props) => {
  return (
    <div>
      <div className={cardsWrapper.titleWrapper}>
        <FilterButton img={'filterSettings'} onClick={props.showFilter} />
        <h2>Где поиграть в {props.game.name}</h2>
      </div>

      <div className={cardsWrapper.container}>
        {(props.screenMode === 'desktop') && <ClubFilter gameId={props.game._id} />}
        {(props.showFilterMark && props.screenMode === 'mobile') && <ClubFilter gameId={props.game._id} />}
        <ClubCards clubs={props.clubs} clubItems={props.clubItems}/>
      </div>
    </div>
  )
};

export default ClubList;