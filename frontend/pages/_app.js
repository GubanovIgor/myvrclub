import App from 'next/app';
import React from 'react';
import withReduxStore from '../redux/lib/with-redux-store';
import {connect, Provider} from 'react-redux';
import Head from 'next/head';
import Header from '../components/Header';
import {changeMapAC, getClubsAC, offChangeMapAC} from "../redux/actions";

class ReduxApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://api-maps.yandex.ru/2.1/?apikey=ea20f38d-5be5-4362-80e9-95ba9d77dc70&lang=ru_RU"
          type="text/javascript"/>
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

// Как прикрутить сюда connect?
export default withReduxStore(ReduxApp);
