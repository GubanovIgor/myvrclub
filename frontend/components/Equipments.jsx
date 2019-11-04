import React from 'react';

// Styled Components
import { ProfileMenu__SectionTitle } from '../stylesheets/index';

const Equipments = (props) => (
    <div>
      <ProfileMenu__SectionTitle>
        <h2>Оборудование <span>{props.item.name}</span></h2>
      </ProfileMenu__SectionTitle>
    </div>
);

export default Equipments;