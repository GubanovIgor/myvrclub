import React, { Component } from 'react';

import styles from '../stylesheets/feedbackForm.module.scss';

export default class FeedbackModal extends Component {

  state = {
    userEmail: '',
    userText: '',
  };

  componentDidUpdate() {
    const modal = this.refs.modal;
    if (modal) {
      modal.addEventListener('click', this.onClose, false);
    };
  };

  componentDidMount() {
    // modal.addEventListener('click', this.onClose, false);
    document.addEventListener('keydown', this.onEscKeyDown, false);
    // document.addEventListener('click', this.handleClickOutside, false);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscKeyDown, false);
    // document.removeEventListener('click', this.handleClickOutside, false);
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

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    if (!this.props.show) {
      return null;
    };

    return (
      <div>
        <div ref='modal' className={styles.popUp}></div>
        <div className={styles.innerPopUp}>
          <h2>Сообщить об ошибке</h2>
          <div className="content">
            <form onSubmit={this.onSubmit}>
              <input type='email'
                placeholder='Ваш email'
                onChange={this.onEmailChange}
                value={this.state.userEmail} />
              <br />
              <textarea type='text'
                placeholder='Описание ошибки'
                onChange={this.onTextChange}
                value={this.state.userText} />
              <button>Отправить</button>
            </form>
          </div>
          <div className="actions">
            <button
              className="toggle-button"
              onClick={() => {
                this.onClose();
              }
              }>
              Закрыть</button>
          </div>
        </div>
      </div>
    );
  };
};
