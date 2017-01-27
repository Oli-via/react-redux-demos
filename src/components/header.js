/**
 * Created by aliyy on 2017/1/27.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks(){
    if (this.props.authenticated) {
      return (
        <li className="navbar-link"><Link to="/signout">Sign Out</Link></li>
      )
    }
    return [
      <li className="navbar-link" key={1}><Link to="/signin">Sign In</Link></li>,
      <li className="navbar-link" key={2}><Link to="/signup">Sign Up</Link></li>
    ]
  }
  render(){
    return(
      <div>
        <h3><Link to="/" className="navbar-link">Redux Auth</Link></h3>
        {this.renderLinks()}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authUser.authenticated }
}

export default connect(mapStateToProps)(Header);