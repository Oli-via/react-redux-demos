/**
 * Created by aliyy on 2017/1/27.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions';


class Feature extends Component {
  componentWillMount(){
    this.props.fetchMessage();
  }
  render(){
    return(
      <div>
        <h3>{this.props.message}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { message: state.authUser.message }
}

export default connect(mapStateToProps, { fetchMessage })(Feature)