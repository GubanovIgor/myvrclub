import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAC } from './_app';
import SignUp from '../components/SignUp';

class Page extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <div>Prop from Redux {this.props.arr}</div>
        <div>Prop from getInitialProps {this.props.custom}</div>
        <button onClick={() => this.props.addTaskAsync(1)}>Кнопка</button>
        
        <SignUp />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  arr: store.arr,
  true: store.true,
  false: store.false,
});

const mapDispatchToProps = (dispatch) => ({
  addTaskAsync: (value) => dispatch(addTaskAC(value)),

  // showTaskAsync: (data) => dispatch(showTaskAC(data)),
  // showTaskAsync: function () {
  //   const action = showTaskAC();
  //   dispatch( action )
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);

// export default connect(store => store)(Page);
