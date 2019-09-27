import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/carusel.module.scss';

// Componentd
import CaruselItem from '../components/CaruselItem';

class Carusel extends Component {
	render() {
		// захардкодил картинки для карусели
		// const caruselData = [
		// 	'https://d1lss44hh2trtw.cloudfront.net/assets/article/2015/12/10/rsz_eve-valkyrie-featured-image_1200x500.jpg',
		// 	'https://www.digiseller.ru/preview/539631/p1_2461891_42c645c0.jpg',
		// 	'https://i.citrus.ua/uploads/content/product-photos/lysyanaya/october/rj1.jpg',
		// 	'https://pic1.zhimg.com/v2-cceec281216bbb881324d1559b80aa91_1200x500.jpg',
		// ];

		const caruselPosition = this.props.caruselIndex * -1230;

		return (
			<div className={styles.carusel}>
				<ul className={styles.caruselImages} style={{marginLeft: caruselPosition}}>
					{this.props.caruselData.map((el, index) => {
						return <CaruselItem
							img={el}
							key={index}
						/>
					})}
				</ul>
				<div className={styles.buttonToLeft} onClick={() => this.props.switchCarusel(this.props.caruselIndex - 1)}>left</div>
				<div className={styles.buttonToRight} onClick={() => this.props.switchCarusel(this.props.caruselIndex + 1)}>right</div>
			</div>
    );
	}
}

export default Carusel;