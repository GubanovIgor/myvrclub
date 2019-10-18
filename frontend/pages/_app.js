import App from 'next/app';
import React from 'react';
import withReduxStore from '../redux/lib/with-redux-store';
import { Provider } from 'react-redux';

// Components
import AppWrapper from '../components/AppWrapper';

class ReduxApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
        //console.log('_app pageProps', pageProps)
    return (
      <Provider store={reduxStore}>
        <AppWrapper pageProps={pageProps} Component={Component}/>
      </Provider>
    );
  }
}

export default withReduxStore(ReduxApp);
