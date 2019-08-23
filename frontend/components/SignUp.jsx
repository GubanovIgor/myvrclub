import React, { Component } from 'react';
import { connect } from 'react-redux';

// SASS
import styles from '../signup.module.scss';

export class SignUp extends Component {
  render() {
    return (
      <div>
        <div id="pop-up" className="pop-up"></div>
        <div id="inner-pop-up" class="inner-pop-up">
          <h3>Заполните анкету</h3>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Название клуба" aria-describedby="basic-addon1" />
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Адрес" aria-describedby="basic-addon1" />
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Стоимость 1 часа игры" aria-describedby="basic-addon1" />
          </div>
          <h5>Выберите оборудование</h5>
          <div class="check-container">
            <label class="container1">PlayStation VR
          <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">HTC Vive
            <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">Oculus
            <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="container1">Fullbody VR
            <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
          <button type="button" class="btn btn-success">Добавить клуб</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //
});

const mapDispatchToProps = {
  //
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
