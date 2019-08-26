import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumAC } from '../redux/actions';

class Page extends Component {

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        {/*<div>Prop from Redux {this.props}</div>*/}
        {/*<div>Prop from getInitialProps {this.props.custom}</div>*/}
        <div>Value -  {this.props.num}</div>
        <button onClick={() => this.props.addNum(1)}>add - 1</button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    num: store.num
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNum: (value) => dispatch(addNumAC(value)),

    // showTaskAsync: (data) => dispatch(showTaskAC(data)),
    // showTaskAsync: function () {
    //   const action = showTaskAC();
    //   dispatch( action )
    // },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
