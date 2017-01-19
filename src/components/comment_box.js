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
  onSubmitClicked(){
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
        <li key={Math.random()}>{comment}</li>
      )
    })
  }
  render(){
    return (
      <div className="comment-box">
        <textarea value={this.props.value} onChange={this.onInputChange.bind(this)}/> {/* event handler的写法！！！onChange={this.onInputChange.bind(this)}！！！*/}
        <button className="btn btn-success" onClick={this.onSubmitClicked.bind(this)}>Submit</button>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
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