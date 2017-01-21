/**
 * Created by aliyy on 2017/1/21.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux'

class CommentList extends Component{
  renderComments(){
    if(!this.props.comments){
      return
    }
    return this.props.comments.map((comment)=>{
      return (
        // 也可以把这个li作为CommentList component
        <li className="list-group-item" key={Math.random()}>{comment}</li>
      )
    })
  }
  render(){
    return (
      <ul className="comment-list list-group" >
        {this.renderComments()}
      </ul>
    )
  }
}
function mapStateToProps(state) {
  return {
    comments: state.comments.comment
  }
}

export default connect(mapStateToProps)(CommentList)