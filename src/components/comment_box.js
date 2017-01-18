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
  onInputChange(value){
    inputChange(value)
  }
  onSubmitClicked(value){
    createPost(value)
  }
  render(){
    return (
      <div className="comment-box">
        <textarea onChange={(event)=>{this.onInputChange(event.target.value)}}/>
        <button className="btn btn-success" onSubmit={this.onSubmitClicked(this.props.value)}>Submit</button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    value: state.comments.value
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPost, inputChange}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox)