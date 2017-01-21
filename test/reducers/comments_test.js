/**
 * Created by aliyy on 2017/1/21.
 */
import { expect } from '../test_helper'
import commentReducer from '../../src/reducers/create_comment_reducer'
import {CREATE_POST, INIT_STATE} from '../../src/actions'

describe('Comments reducer', ()=>{
  it('handles action with unknown type', ()=>{
    expect(commentReducer()).to.be.instanceof(Object)
  })
  it('handles action of type CREATE_POST', ()=>{
    const action = { type: CREATE_POST, payload: 'New Comment'}
    expect(commentReducer([], action)).to.eql(['New Comment'])
  })
})