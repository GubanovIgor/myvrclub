import App from 'next/app';
import React from 'react';
import withReduxStore from '../redux/lib/with-redux-store';
import { Provider } from 'react-redux';
import Header from '../components/Header';

class ReduxApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(ReduxApp);
