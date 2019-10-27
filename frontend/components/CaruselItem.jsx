import React from 'react';

const CaruselItem = (props) => {
	// const { caruselIndex, index, switchCarusel } = props;
	return (
		// (caruselIndex != index) ?
		<li><img src={props.img}/></li>
		// <li><img src={props.img}></img></li>
	);
}

export default CaruselItem;