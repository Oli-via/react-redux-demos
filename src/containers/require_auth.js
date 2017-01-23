/**
 * Created by aliyy on 2017/1/21.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// the argument is gonna be a component that i want to wrap with my require authentication HOC
// we are exporting a function that receives some component that we care about.
// we can call this function as many times/different components as we want.
// everytime we call the HOC with a different component wa're going to export a different class, a new copy of a class
// the class it created is a react component, and its sole purpose is to render the component we passed to the function
// if we called the authentication with our resources component,
// we would return a react component whose only job was to show the class that we passed in which is Resources.
export default function (ComposedComponent) {
  class Authentication extends Component{
    // the syntax using the static keyword defined what's called a class level property saying
    // static contextTypes equals object.
    // gives any other application or any other piece of code inside of our application
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){
      if(!this.props.authenticated){
        this.context.router.push('/')
      }
    }
    // componentWillUpdate will be called whenever the component is about to be handed a new set of props, or be rendered
    // the first argument is nextProps, which represents what the next set of properties of a component will be rendered with
    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.context.router.push('/')
      }
    }
    render (){
      // console.log(this.context);
      // console.log(this.props.authenticated)  // => resourceList
      return <ComposedComponent {...this.props}/>
      //this.props的内容在Resource.js里，是<Resources resourcList={resources} />的resourcList={resources}
    //
    }
  }
  function mapStateToProps(state) {
    return {authenticated: state.authenticated}
  }
  // connect本身也是HOC，用HOC包裹HOC
  return connect(mapStateToProps)(Authentication)
}

/*
// In some other location...Not in this file...
// We want to use this HOC

import Authentication // this is my HOC
import Resources      // This is the component I want to wrap

const ComposedComponent = Authentication(Resources)
// our HOC(Authentication) is a function which is called within an existing component(Resources)

// In some render method...
<ComposedComponent resources={resourceList}/>   // this will render both Authentication and ComposedComponent
// this composed component is an instance of the Authentication component above
// we'll pass it some props, and expect them to show up on site of the above component as this.props: return <ComposedComponent {...this.props}/>

*/



// we export a function from this file, and if we call this function with a component,
// we will get back another component class that wraps the one that we call this function with.
