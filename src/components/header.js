/**
 * Created by aliyy on 2017/1/27.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { authUser} from '../actions';

class Header extends Component {
  componentWillMount(){
    if ( localStorage.getItem('token') && !this.props.authenticated ) {
      this.props.authUser();
    }
  }
  renderLinks(){
    if (this.props.authenticated) {
      return ([
        <li className="navbar-link"><Link to="/signout" key={3}>Sign Out</Link></li>,
        <li className="navbar-link"><Link to="/feature" key={4}>Feature</Link></li>
      ])
    }
    return [
      <li className="navbar-link" key={1}><Link to="/signin">Sign In</Link></li>,
      <li className="navbar-link" key={2}><Link to="/signup">Sign Up</Link></li>
    ]
  }
  render(){
    return(
      <div>
        <h3><Link to="/" className="navbar-link" key={5}>Redux Auth</Link></h3>
        {this.renderLinks()}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authUser.authenticated }
}

export default connect(mapStateToProps, { authUser })(Header);