/**
 * Created by aliyy on 2017/1/27.
 */
import React, { Component } from 'react';
import { signOut } from '../../actions';
import { connect } from 'react-redux';

class SignOut extends Component {
  componentWillMount(){
    this.props.signOut();
  }
  render(){
    return(
      <div>Sorry to see you go...</div>
    )
  }
}

export default connect(null, { signOut })(SignOut);