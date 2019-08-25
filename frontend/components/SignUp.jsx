import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { signUpAC } from '../pages/_app';

// SASS
import styles from '../signup.module.scss';


export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      password2: '',
    };
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onChangePassword2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  onClick = async (e) => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      const data = {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
      };

      // this.props.regUser(this.state.email, this.state.name, this.state.password);
      await fetch('http://localhost:3100/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } else {
      console.log('error password');
    }
  };

  render() {
    return (
      <div>
        <div className={styles.popUp}></div>
        <div className={styles.innerPopUp}>
          <h3>Заполните анкету</h3>
          <form >
            <div>
              <input onChange={this.onChangeEmail} value={this.state.email} type="text" placeholder="Ваш e-mail" />
            </div>
            <div>
              <input onChange={this.onChangeName} value={this.state.name} type="text" placeholder="Имя на сайте" />
            </div>
            <div>
              <input onChange={this.onChangePassword} value={this.state.password} type="password" placeholder="Пароль" />
            </div>
            <div>
              <input onChange={this.onChangePassword2} value={this.state.password2} type="password" placeholder="Пароль еще раз" />
            </div>
            <button onClick={this.onClick}>Registration</button>
          </form>
          <div className={styles.checkContainer}>
            <label className={styles.container1}>Я принимаю пользовательское соглашение
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  user: store.user,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, name, password) => dispatch(signUpAC(email, name, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
