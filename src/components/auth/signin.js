/**
 * Created by aliyy on 2017/1/26.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SignIn extends Component{
  submitForm({ email, password }){
    console.log(email, password)
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
        <button action="submit" className="btn btn-success">Sign In</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'SignIn',
  fields: ['email', 'password']
})(SignIn)