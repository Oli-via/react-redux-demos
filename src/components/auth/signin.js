/**
 * Created by aliyy on 2017/1/26.
 */
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signInUser } from '../../actions';

class SignIn extends Component{
  submitForm({ email, password }){
    this.props.signInUser({ email, password });
  }
  renderError(){
    console.log(this.props.error);
    if (this.props.error){
      console.log(1);
      return (
        <div className="alert alert-danger">{this.props.error}</div>
      )
    }
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
        {this.renderError()}
        <button action="submit" className="btn btn-success">Sign In</button>
      </form>
    )
  }
}
function mapStateToProps(state) {
  console.log(state.authUser.error);

  return { error: state.authUser.error };
}

export default reduxForm({
  form: 'SignIn',
  fields: ['email', 'password']
}, mapStateToProps, { signInUser })(SignIn)