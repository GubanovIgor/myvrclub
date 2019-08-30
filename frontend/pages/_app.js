import App from 'next/app';
import React from 'react';
import withReduxStore from '../redux/lib/with-redux-store';
import { Provider } from 'react-redux';
import Head from 'next/head'
import Header from '../components/Header';

class ReduxApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(ReduxApp);
