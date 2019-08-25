import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount, addNumAC, startClock } from '../redux/store';


class Page extends Component {

  render() {
    // console.log('this.props', this.props);
    // console.log('state.numbers', this.props.count);
    return (
      <div>
        <button onClick={() => this.props.addNum(1)}>add - 1</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => { //записываем в стейт
  return {
    addNum: (num) => dispatch(addNumAC(num)),
  }
};

const mapStateToProps = (state) => { //прилетают из стейта
  return {
    count: state.data
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

//export default connect()(Page);
