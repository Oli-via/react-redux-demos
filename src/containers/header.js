/**
 * Created by aliyy on 2017/1/21.
 */
import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { isAuth } from '../actions'
import {bindActionCreators} from 'redux'

class Header extends Component {
  authButton(){
    if (this.props.authenticated) {
      return (
        <button onClick={()=>{ this.props.isAuth(false)}}>Sign Out</button>
      )
    }
    return (
      <button onClick={()=>{ this.props.isAuth(true) }}>Sign In</button>
    )
  }
  render(){
    return(
      <ul className="nav">
        <li className="nav-bar">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-bar">
          <Link to="/resources">Resources</Link>
        </li>
        {this.authButton()}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {authenticated: state.authenticated}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({isAuth: isAuth}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)