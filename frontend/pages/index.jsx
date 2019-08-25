import React, { Component } from 'react';
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../redux/store'
import Examples from '../components/examplesThunk/examples'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Page from './page';

class Home extends Component {

  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));
    return {}
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    console.log('this.props index.js', this.props)
    return (<div>
        <Header/>
        <Examples/>
        <Page/>
        <Footer/>
      </div>
    );
  }
}

export default connect()(Home)