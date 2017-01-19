/**
 * Created by aliyy on 2017/1/18.
 */
import React, {Component} from 'react'
import {createPost, inputChange} from '../actions/index'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class CommentBox extends Component{
  constructor(props){
    super(props)
  }
  onInputChange(event){ // ！！！这里是event handler，直接可以传入event！！！
    this.props.inputChange(event.target.value)
  }
  handleSubmit(event){
    event.preventDefault();
    if (!this.props.value){
      return;
    }
    this.props.createPost(this.props.value, (new Date()).toString())
    this.props.inputChange('')
  }
  renderComments(){
    if(!this.props.comments){
      return
    }
    return this.props.comments.map((comment)=>{
      return (
        // 也可以把这个li作为CommentList component
        <li key={Math.random()}>{comment}</li>
      )
    })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea value={this.props.value} onChange={this.onInputChange.bind(this)}/> {/* event handler的写法！！！onChange={this.onInputChange.bind(this)}！！！*/}
        {/* 外层是form表单，里面的button点击就是提交表单。 */}
        <button className="btn btn-success">Submit</button>
        <ul className="comment-list" >
          {this.renderComments()}
        </ul>
      </form>
    )
  }
}


function mapStateToProps(state) {
  return {
    value: state.comments.value,
    comments: state.comments.comment,
    key: state.comments.key
  }
}

function mapDispatchToProps(dispatch) {
  // bind之后的action就绑定在了！！！this.props上！！！只能通过this.props.调用！！！
  return bindActionCreators({createPost, inputChange}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)