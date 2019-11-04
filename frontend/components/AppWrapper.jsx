import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

// Components
import ScrollUp from '../components/ScrollUp';

// SASS
import styles from '../stylesheets/appWrapper.module.scss';

// import AC
import { switchScreenModeAC } from '../redux/actions/screenmode';
import { switchPaginationValueAC } from '../redux/actions/pagination';
// import { getClubsForMapAC } from "../redux/actions/clubs.js";


class AppWrapper extends Component {
	updateDimensions = () => {
		if (window.innerWidth <= 425) {
			this.props.switchScreenMode('mobile');
		} else {
			this.props.switchScreenMode('desktop');
		}
	};

	componentDidMount = async () => {
		this.updateDimensions();
		// this.props.getClubsForMap(this.props.filterToggle);
		window.addEventListener('resize', this.updateDimensions);
	};

	autoPagination = async (type, id) => {
		if (!type) {
			this.props.pagination(1);
		}
		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
		let clientHeight = document.documentElement.clientHeight;
		if (windowRelativeBottom < clientHeight + 200 && !this.props.loading) {
			console.log(id, 'ID');
			this.handlePageChange(type, id);
		}
	}

	handlePageChange = async (type, id) => {
		(type === 'game') ?
		await this.props.pagination(this.props.paginationValue + 1, this.props.gamesFilterToggle, type, id, this.props.SearchName)
			:
		await this.props.pagination(this.props.paginationValue + 1, this.props.clubsFilterToggle, type, id, this.props.SearchName)
    console.log('this.props.SearchName in AppWrapper', this.props.SearchName)
	};

	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<ScrollUp />
				<div className={styles.container}>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
						{/*<script src="https://api-maps.yandex.ru/2.1/?apikey=ea20f38d-5be5-4362-80e9-95ba9d77dc70&lang=ru_RU"*/}
							type="text/javascript" />
						<title>Все VR клубы Москвы | Все VR игры</title>
					</Head>
					<Component
						{...pageProps}
						autoPagination={this.autoPagination}
						screenMode={this.props.screenMode}
					/>

				</div>
				{/* <Footer /> */}
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		screenMode: store.screenMode,
		paginationValue: store.paginationValue,
		gamesFilterToggle: store.gamesFilterToggle,
		clubsFilterToggle: store.clubsFilterToggle,
		loading: store.loading,
    SearchName: store.SearchName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// getClubsForMap: (filterToggleData) => dispatch(getClubsForMapAC(filterToggleData)),
		switchScreenMode: (screenMode) => dispatch(switchScreenModeAC(screenMode)),
		pagination: (paginationValue, filterToggleData, type, id, searchName) => dispatch(switchPaginationValueAC(paginationValue, filterToggleData, type, id, searchName)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);