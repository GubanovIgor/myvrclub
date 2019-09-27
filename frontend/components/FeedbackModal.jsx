import React, { Component } from 'react';
import axios from 'axios';

import styles from '../stylesheets/feedbackForm.module.scss';

export default class FeedbackModal extends Component {

  state = {
    userName: '',
    userEmail: '',
    userText: '',
    currentUrl: window.location.href,
  };

  componentDidUpdate() {
    const modal = this.refs.modal;
    if (modal) {
      modal.addEventListener('click', this.onClose, false);
    };
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscKeyDown, false);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscKeyDown, false);
  };

  onEscKeyDown = (e) => {
    if (e.key !== 'Escape') {
      return;
    } else if (this.props.show == true) {
      this.onClose();
    };
  };

  onClose = () => {
    this.props.onClose();
  };

  onEmailChange = (e) => {
    this.setState({
      userEmail: e.target.value,
    });
  };

  onTextChange = (e) => {
    this.setState({
      userText: e.target.value,
    });
  };

  onNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3100/send-mail', {
      name: this.state.userName,
      from: this.state.userEmail,
      text: this.state.userText,
      url: this.state.currentUrl,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setState({
      userName: '',
      userEmail: '',
      userText: '',
    });
    this.onClose();

    this.props.notifySendMail();
  };

  render() {
    if (!this.props.show) {
      return null;
    };

    return (
      <div>
        <div ref='modal' className={styles.popUp}></div>
        <div className={styles.innerPopUp}>
          <h2 className={styles.modalTitle}>Сообщить об ошибке</h2>
          <div className={styles.content}>
            <form onSubmit={this.onSubmit}>
              <input type='text'
                placeholder='Ваше имя'
                onChange={this.onNameChange}
                value={this.state.userName}
                required />
              <input type='email'
                placeholder='Ваш email'
                onChange={this.onEmailChange}
                value={this.state.userEmail}
                required />
              <textarea type='text'
                placeholder='Описание ошибки'
                onChange={this.onTextChange}
                value={this.state.userText}
                required />
              <button className={styles.button}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
};
