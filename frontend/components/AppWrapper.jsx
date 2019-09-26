import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

class AppWrapper extends Component {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<div>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<script src="https://api-maps.yandex.ru/2.1/?apikey=ea20f38d-5be5-4362-80e9-95ba9d77dc70&lang=ru_RU"
						type="text/javascript" />
				</Head>
				<Component {...pageProps}/>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {

	};
};

const mapDispatchToProps = (dispatch) => {
	return {

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);