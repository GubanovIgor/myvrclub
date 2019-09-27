import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

// import AC
import { switchScreenModeAC } from '../redux/actions';

class AppWrapper extends Component {
	updateDimensions = () => {
    if (window.innerWidth <= 438) {
      this.props.switchScreenMode('mobile');
    } else {
      this.props.switchScreenMode('desktop');
    }
	};
	
	componentDidMount = async () => {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  };

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
		screenMode: store.screenMode,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		switchScreenMode: (screenMode) => dispatch(switchScreenModeAC(screenMode)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);