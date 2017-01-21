/**
 * Created by aliyy on 2017/1/21.
 */
import { expect } from '../test_helper'
import commentReducer from '../../src/reducers/create_comment_reducer'
import {CREATE_POST, INIT_STATE} from '../../src/actions'

describe('Comments reducer', ()=>{
  it('handles action with unknown type', ()=>{
    // 传入的是commentReducer()，就会报错：TypeError: Cannot read property 'type' of undefined
    // 因为commentReducer()是在执行这个reducer，而一开始还没有action，所以需要传入action
    expect(commentReducer(undefined, {})).to.be.instanceof(Array)
    expect(commentReducer(undefined, {})).to.eql([])
  })
  it('handles action of type CREATE_POST', ()=>{
    const action = { type: CREATE_POST, payload: 'New Comment'}
    expect(commentReducer([], action)).to.eql(['New Comment'])
  })
})