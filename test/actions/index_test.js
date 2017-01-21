/**
 * Created by aliyy on 2017/1/21.
 */
import { expect} from '../test_helper'
import {createPost, CREATE_POST} from '../../src/actions'

describe('actions', ()=>{
  describe('save comment', ()=>{
    it('has the correct type',()=>{
      const action = createPost();
      expect(action.type).to.equal(CREATE_POST)
    })
    it('has the correct payload',()=>{
      const action = createPost('new Comment');
      expect(action.payload).to.equal('new Comment')
    })
  })

})