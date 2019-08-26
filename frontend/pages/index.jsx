import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndexSearch from '../components/IndexSearch';
import Page from './page';
import Example from '../components/examplesThunk/examples';
import { serverRenderClock, startClock } from '../redux/actions';


class Index extends Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req;
    console.log('isServer', isServer);
    //reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }

  componentDidMount () {
    //this.timer = startClock(this.props.dispatch)
  }

  componentWillUnmount () {
    //clearInterval(this.timer)
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

export default connect()(Index)
