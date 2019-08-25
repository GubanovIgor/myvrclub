import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { signInAC } from '../pages/_app';

// SASS
import styles from '../signup.module.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onClick = async (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    await fetch('http://localhost:3100/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  render() {
    console.log()
    return (
      <div>
        <div className={styles.popUp}></div>
        <div className={styles.innerPopUp}>
          <h3>Войти</h3>
          <form >
            <div>
              <input onChange={this.onChangeEmail} value={this.state.email} type="text" placeholder="Ваш e-mail" />
            </div>
            <div>
              <input onChange={this.onChangePassword} value={this.state.password} type="password" placeholder="Пароль" />
            </div>
            <button onClick={this.onClick}>SignIn</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.user,
});

const mapDispatchToProps = {
  signIn: (email, password) => dispatch(signInAC(email, password)),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
