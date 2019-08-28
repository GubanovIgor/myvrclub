import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndexSearch from '../components/IndexSearch';
import Example from '../components/examplesThunk/examples';
import { serverRenderClock, startClock } from '../redux/actions';


class Index extends Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req;
    console.log('getInitialProps - isServer', isServer);
    //reduxStore.dispatch(serverRenderClock(isServer)) //рендер с сервера (первый раз)
    return {custom: 'custom props'}
  }

  componentDidMount () {
    //this.timer = startClock(this.props.dispatch)
  }

  componentWillUnmount () {
    //clearInterval(this.timer)
  }

  render () {
    console.log('this.props index.js', this.props);
    return (<div>
      <Header />
      <IndexSearch />
      <Footer />
    </div>
    );
  }
}

export default connect()(Index)
