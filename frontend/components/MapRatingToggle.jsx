import React, { Component } from 'react';

// SASS
import styles from '../stylesheets/filterItem.module.scss';

class MapRatingToggle extends Component {
	render() {
		return (
			<div>
				<h3>Показывать</h3>
				{/*/!*<TextInput onRequestOptions={this.handleRequestOptions} options={this.state.options}/>*!/*/}
				{/*<input*/}
				{/*className={styles.metroInput} placeholder='охотный ряд' type='text' id='1'*/}
				{/*/><br></br>*/}
				<label className={styles.container}>По рейтингу
					<input
						className={styles.filterCheckbox}
						onClick={this.offChangeMap}
						type="radio"
						id="onRating"
						name="drone"
						value="onRating"
					/>
					<span className={styles.checkmark}/>
				</label>

				<label className={styles.container}>На карте
					<input
						className={styles.filterCheckbox}
						onClick={this.onChangeMap}
						type="radio"
						id="onMap"
						name="drone"
						value="onMap"
					/>
					<span className={styles.checkmark}/>
				</label>
			</div>
		);
	}
}

export default MapRatingToggle;