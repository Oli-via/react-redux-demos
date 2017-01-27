/**
 * Created by aliyy on 2017/1/27.
 */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Feature extends Component {
  componentWillMount(){
    if ( !localStorage.getItem('token') ){
      browserHistory.push('/');
    }
  }
  render(){
    return(
      <div>
        <h3>Special Feature for you!</h3>
      </div>
    )
  }
}