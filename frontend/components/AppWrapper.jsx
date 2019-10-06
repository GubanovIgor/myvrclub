import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

// Components
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp';

// SASS
import styles from '../stylesheets/appWrapper.module.scss';

// import AC
import { switchScreenModeAC, switchPaginationValueAC } from '../redux/actions';

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
		window.addEventListener('resize', this.updateDimensions);
	};

	autoPagination = async (type) => {
		if (!type) {
			this.props.pagination(1);
		}
		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
		let clientHeight = document.documentElement.clientHeight;
		if (windowRelativeBottom < clientHeight + 100 && !this.props.loading) {
			this.handlePageChange(type);
		}
	}

	handlePageChange = async (type) => {
		await this.props.pagination(this.props.paginationValue + 1, this.props.filterToggle, type)
	};

	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<ScrollUp />
				<div className={styles.container}>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
						<script src="https://api-maps.yandex.ru/2.1/?apikey=ea20f38d-5be5-4362-80e9-95ba9d77dc70&lang=ru_RU"
							type="text/javascript" />
					</Head>
					<Component
						{...pageProps}
						autoPagination={this.autoPagination}
            {...this.props}
					/>
				</div>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		screenMode: store.screenMode,
		paginationValue: store.paginationValue,
		filterToggle: store.gamesFilterToggle,
		loading: store.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		switchScreenMode: (screenMode) => dispatch(switchScreenModeAC(screenMode)),
		pagination: (paginationValue, filterToggleData, type) => dispatch(switchPaginationValueAC(paginationValue, filterToggleData, type)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
