import React, { Component } from 'react';
import FeedbackModal from './FeedbackModal';

export default class FeedbackForm extends Component {

  state = {
    show: false,
  };

  showModal = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Сообщить об ошибке на странице</button>
        <FeedbackModal onClose={this.showModal} show={this.state.show}>Modal</FeedbackModal>
      </div>
    );
  };
};
