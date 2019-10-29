import React from 'react';

// Styled Components
import { ProfileMenu__Item, ProfileMenu__Wrapper } from '../stylesheets/index';

// Import Components
import { FilterButton } from '../stylesheets/filterItem';
import GameFilter from '../components/GameFilter';
import Loading from './Loading';

const ProfileMenu = (props) => {

  return (
    <ProfileMenu__Wrapper>
      {props.menuItems.map(el => {
        return <ProfileMenu__Item onClick={() => props.menuToggle(el)}
          key={el}
          section={el}
          menuSection={props.menuSection}>
          {el}
        </ProfileMenu__Item>
      })}
    </ProfileMenu__Wrapper>
  )
};

export default ProfileMenu;