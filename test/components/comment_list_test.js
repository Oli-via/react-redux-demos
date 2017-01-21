/**
 * Created by aliyy on 2017/1/21.
 */
import { renderComponent, expect} from '../test_helper'
import CommentList from '../../src/containers/comment_list'

describe("CommentList", ()=>{
  let component;
  beforeEach(()=>{
    // renderComponent方法可以有几个参数，push到CommentList中
    // 第三个参数是一个object，it will show up as props inside of the rendered component(CommentList)
    const props = {comments: ['New Comment', 'Other New Comment']}
    component = renderComponent(CommentList, null, props)
  })
  it ('shows an LI for each element', ()=>{
    expect(component.find('li').length).to.equal(2)
  })
  it ('shows each comment that is provided', ()=>{
    expect(component).to.contain("New Comment")
    expect(component).to.contain("Other New Comment")
  })
})