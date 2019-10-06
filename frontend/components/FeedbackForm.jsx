import React, { Component } from 'react';
import FeedbackModal from './FeedbackModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <button onClick={this.showModal}>Сообщить об ошибке на странице</button>
        <FeedbackModal
          onClose={this.showModal}
          show={this.state.show}
          notifySendMail={this.notifySendMail}
          />
      </div>
    );
  };
};
