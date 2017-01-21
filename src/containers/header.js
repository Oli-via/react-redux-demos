/**
 * Created by aliyy on 2017/1/21.
 */
import React, {Component} from 'react'
import { Link } from 'react-router'

class Header extends Component {
  authButton(){
    return (
      <button>Sign In</button>
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