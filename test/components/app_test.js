// Mocha test

// this file is solely made for testing component App

// import two helpers off of the test helper file
import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

// put down three simple keywords (describe, it and expect) that are going to
// form the absolute backbone or root of every test that we write in the future

// use 'describe' to group together similar tests
// 里面的string是App，那么就是在describe 'App'，目的是在报告里体现测试的名字
// the only purpose of it is for our report,
// when we run our test so when the tests run and they execute (pass or fail),
// we gonna get a report back from our testing setup, and it gonna say [assed or failed.
describe('App', ()=>{
  // use 'it' to test a single attribute of a target
  // to use 'it' to group one single test
  // the string is only used for the report that gets generated when we run our test
  // it not used to figure out what to run or how to run it.
  it('shows the correct text', ()=>{

    // create an instance of App
    const component = renderComponent(App)

    // use 'expect' to make an assertion about a target
    expect(component).to.contain("React simple starter")
  })

})

// when mocha first executes and runs this test file, the tests are not immediately ran.
// so when this file gets parsed, it goes in a mocha, mocha read all the code in here and the code is not immediately executed.
// instead, macha takes record of all the functions that we declared and passed into these describe in 'it' block
// the purpose of that is some mocha can cue these tests up to run in the future
// so that can safely execute our code which might be throwing tremendous errors