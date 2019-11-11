import React, { Component } from 'react';

// Styled Components
import { MapRatingToggleWrapper, Toggle } from '../stylesheets/index';

class MapRatingToggle extends Component {
	render() {
		return (
			<MapRatingToggleWrapper onClick={this.props.changeMapHandler} map={this.props.map}>
				<Toggle map={this.props.map}/>
			</MapRatingToggleWrapper>
		);
	}
}

export default MapRatingToggle;