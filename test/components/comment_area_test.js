/**
 * Created by aliyy on 2017/1/18.
 */
import {renderComponent, expect} from '../test_helper'
import CommentArea from '../../src/containers/comment_area'

describe('CommentArea', ()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(CommentArea)
  })

  it('has a text area', ()=>{
    // const component = renderComponent(CommentArea)
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', ()=>{
    // const component = renderComponent(CommentArea)
    expect(component.find("button")).to.exist;
  });

  it('has a correct class', ()=>{
    // const component = renderComponent(CommentArea)
    expect(component).to.have.class("comment-box");  //to.have.class的expect里只能是component，不能是component.find("div")
  });

  describe('entering some text', ()=>{

    it('shows that text in the textarea', ()=>{
      // .simulate意思是：im going to simulate an event, which is a 'change' event, 'new comment' is the new value come from the 'change' event
      component.find('textarea').simulate('change', 'new comment');
      expect(component.find('textarea')).to.have.value('new comment');
    });
    it('when submitted, clears the input', ()=>{
      component.simulate("submit");
      expect(component.find('textarea')).to.have.value('');
    });
  })
})