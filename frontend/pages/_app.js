import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';

// initialState
const initialState = {
  arr: [1, 2, 3],
  false: false,
  true: true,
  modalCheckSignUp: false,
  modalCheckSignIn: false,
  authenticated: false,
  user: {
    email: '',
    name: '',
    password: '',
  },
  userSignIn: {
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        arr: [...state.arr, action.value],
      };
    case SHOW_MODAL_SIGN_UP:
      return {
        ...state,
        modalCheckSignUp: true,
      };
    case SHOW_MODAL_SIGN_IN:
      return {
        ...state,
        modalCheckSignIn: true,
      };
    case SIGN_UP:
      return {
        ...state,
        user: {
          email: action.user.email,
          name: action.user.name,
          password: action.user.password,
        },
      };
    case SIGN_IN:
      return {
        ...state,
        user: {
          email: action.user.email,
          password: action.user.password,
        },
      };
    default:
      return state;
  }
};

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    ctx.store.dispatch({ type: 'FOO', payload: 'foo222' });

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    //console.log(pageProps);
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    // console.log(store.getState());
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);

//Types
export const ADD_TASK = 'ADD_TASK';
export const SHOW_MODAL_SIGN_UP = 'SHOW_MODAL_SIGN_UP';
export const SHOW_MODAL_SIGN_IN = 'SHOW_MODAL_SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

//Actions
export const addTaskAC = (value) => ({
  type: ADD_TASK,
  value,
});

export const showModalSignUpAC = () => ({
  type: SHOW_MODAL_SIGN_UP,
});

export const showModalSignInAC = () => ({
  type: SHOW_MODAL_SIGN_IN,
});

export const signUpAC = (name, email, password) => ({
  type: SIGN_UP,
  user: {
    name,
    email,
    password,
  },
});

export const signInAC = (email, password) => ({
  type: SIGN_IN,
  userSignIn: {
    email,
    password,
  },
});
