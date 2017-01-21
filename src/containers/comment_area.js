/**
 * Created by aliyy on 2017/1/18.
 */
import React, {Component} from 'react'
import {createPost, inputChange} from '../actions/index'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class CommentArea extends Component{
  onInputChange(event){ // ！！！这里是event handler，直接可以传入event！！！
    this.props.inputChange(event.target.value)
  }
  handleSubmit(event){
    event.preventDefault();
    if (!this.props.value){
      return;
    }
    this.props.createPost(this.props.value)
    this.props.inputChange('')
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea value={this.props.value} onChange={this.onInputChange.bind(this)}/> {/* event handler的写法！！！onChange={this.onInputChange.bind(this)}！！！*/}
        {/* 外层是form表单，里面的button点击就是提交表单。 */}
        <button className="btn btn-success">Submit</button>
      </form>
    )
  }
}


function mapStateToProps(state) {
  return {
    value: state.comments.value,
  }
}

function mapDispatchToProps(dispatch) {
  // bind之后的action就绑定在了！！！this.props上！！！只能通过this.props.调用！！！
  return bindActionCreators({createPost, inputChange}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentArea)