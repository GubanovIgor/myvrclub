import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndexSearch from '../components/IndexSearch';
import Page from './page';

class Index extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch({ type: 'FOO', payload: 'myValue' }); // component will be able to read from store's state when rendered
    return { custom: 'custom' }; // you can pass some custom props to component from here
  }

  render () {
    return (<div>
      <Header />
      <IndexSearch />
      <Page />
      <Footer />
    </div>
    );
  }
}

export default Index;
