/**
 * Created by aliyy on 2017/1/23.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { bindActionCreators } from 'redux'

class UserList extends Component {
  componentWillMount(){
    this.props.fetchUsers()
  }
  renderUserList(){
    return this.props.users.map((user)=>{
      return (
        <div className="card" key={user.name}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">Cheese Factory</p>
          <a className="btn btn-primary">Email</a>
        </div>
      )
    })
  }
  render(){
    return(
      <div className="user-list">
        {this.renderUserList()}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {users: state.users}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUsers: fetchUsers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)