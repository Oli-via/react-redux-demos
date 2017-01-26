import React, { Component } from 'react';
import { connect } from 'react-redux';

class Error extends Component {
  render(){
    if (this.props.error){
      return (
        <div className="alert alert-danger">{this.props.error}</div>
      )
    }
    return <div></div>
  }
}

function mapStateToProps(state) {
  return { error: state.authUser.error };
}

export default connect( mapStateToProps)(Error)