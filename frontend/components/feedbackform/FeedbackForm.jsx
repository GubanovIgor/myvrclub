import React, { Component } from 'react';
import FeedbackModal from './FeedbackModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../stylesheets/feedbackForm.module.scss';

export default class FeedbackForm extends Component {

  state = {
    show: false,
  };

  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  notifySendMail = () => {
    toast.info('Сообщение отправлено', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  render() {
    return (
      <div>
        <ToastContainer/>
        <a className={styles.link} onClick={this.showModal} href='#'>Сообщить об ошибке на странице</a>
        <FeedbackModal
          onClose={this.showModal}
          show={this.state.show}
          notifySendMail={this.notifySendMail}
          />
      </div>
    );
  };
};
