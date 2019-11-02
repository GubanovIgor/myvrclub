import React, { Component } from 'react';

// Styled Components
import { MapRatingToggleWrapper, Toggle } from '../stylesheets/index';

class MapRatingToggle extends Component {
	render() {
		return (
			<MapRatingToggleWrapper>
				<Toggle></Toggle>
			</MapRatingToggleWrapper>
		);
	}
}

export default MapRatingToggle;