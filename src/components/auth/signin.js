/**
 * Created by aliyy on 2017/1/26.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signInUser } from '../../actions';
import { connect } from 'react-redux';
import Error from '../error';

class SignIn extends Component{
  submitForm({ email, password }){
    this.props.signInUser({ email, password });
  }

  render(){
    const { fields: {email, password }, handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" {...email} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input type="text" className="form-control" {...password} />
        </fieldset>
        <Error />
        <button action="submit" className="btn btn-success">Sign In</button>
      </form>
    )
  }
}

const ReduxForm = reduxForm({
  form: 'SignIn',
  fields: ['email', 'password']
})(SignIn);

export default connect( null, { signInUser })(ReduxForm)