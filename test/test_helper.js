import jsdom from 'jsdom'
// 不能直接引入$，因为jquery会找浏览器环境下的dom
// _$告诉jquery：用node环境下的假dom对象
import _$ from 'jquery'
import TestUtils from 'react-addons-test-utils'
import ReactDom from 'react-dom'
import chai, { expect } from 'chai'
import React from 'react'
// 引入3个redux相关文件：
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import reducers from '../src/reducers'
import chaiJquery from 'chai-jquery'


/* Set up testing environment to run like a browser in the command line */

// 创建jsdom，the fake dom，放到nodejs的global环境的document中，让jquery也能认为是真的dom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
// 定义另外一个fake dom对象：
global.window = global.document.defaultView;

// 定义jquery
const $ = _$(global.window);

/* build 'renderComponent' helper that should render a given react class  */
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    // when we create the redux store, we need to pass the reducers
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  )
  return $(ReactDom.findDOMNode(componentInstance));  // produces HTML
}

/* build helper for simulating events  */
$.fn.simulate = function(eventName, value){
  if (value) {
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

/* set up Chai-jquery  */
chaiJquery(chai, chai.util, $)


export {renderComponent, expect}