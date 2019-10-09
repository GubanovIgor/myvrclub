import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { fireBaseRedux } from '../../redux/actions';

const config = {
  apiKey: 'AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk',
  authDomain: 'fir-auth-tutorial-ed11f.firebaseapp.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class FirebaseAuth extends Component {
  // state = { isSignedIn: false };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount() {
    this.props.fireBaseRedux();
  };

  render() {
    console.log(this.props);
    return (
      <div className='App'>
        {this.props.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt='profile picture'
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isSignedIn: state.isSignedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fireBaseRedux: fireBaseRedux,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseAuth);
