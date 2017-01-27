/**
 * Created by aliyy on 2017/1/27.
 */
import React, { Component } from 'react';
import { signUp } from '../../actions';
import { reduxForm } from 'redux-form';
import Error from '../error';

class SignUp extends Component {
  submitForm({ email, password }){
    this.props.signUp({ email, password });
  }

  render(){
    const {fields: { email, password, confirmPassword }, handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <input type="text" className='form-control' {...email}/>
          { email.error && email.touched && <div className="text-danger">{ email.error }</div>}
          <Error/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input type="password" className='form-control' {...password}/>
          { password.error && password.touched && <div className="text-danger">{ password.error }</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password</label>
          <input type="password" className='form-control' {...confirmPassword}/>
          {/* 这里是字段的error属性中有信息 */}
          { confirmPassword.error && confirmPassword.touched && <div className="text-danger">{ confirmPassword.error }</div>}
        </fieldset>
        <button type="submit" className="btn btn-success">Sign up!</button>
      </form>
    )
  }
}

// 注意validate写法
function validate(formProps) {
  const errors = {};
  if (formProps.password !== formProps.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  if (!formProps.password){
    errors.password = 'Password must not be blank';
  }
  if (!formProps.email){
    errors.email = 'Email must not be blank';
  }
  return errors;
}
export default reduxForm({
  form: 'signup',
  fields: [ 'email', 'password', 'confirmPassword' ],
  validate
}, null, { signUp })(SignUp);