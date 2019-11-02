import React from 'react';

// Styled Components
import { ProfileContent__Wrapper, ProfileMenu__SectionTitle } from '../stylesheets/index';

const Equipments = (props) => (
    <ProfileContent__Wrapper>
      <ProfileMenu__SectionTitle>
        <h2>Оборудование <span>{props.item.name}</span></h2>
      </ProfileMenu__SectionTitle>
      
    </ProfileContent__Wrapper>
);

export default Equipments;