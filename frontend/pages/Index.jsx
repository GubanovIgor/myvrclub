import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from './page';
import Head from 'next/head';

class Home extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    // console.log(store);
    store.dispatch({ type: 'FOO', payload: 'myValue' }); // component will be able to read from store's state when rendered
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }

  render () {
    return (
    <div>
      <Head>
        <title>Мир виртуальной реальности!</title>
      </Head>
      <Header />
      <Page />
      <Footer />
    </div>
    );
  }
}

export default Home;
