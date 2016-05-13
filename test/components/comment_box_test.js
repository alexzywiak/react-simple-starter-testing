import {renderComponent, expect} from '../test_helper.js';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('should render', () => {
    expect(component).to.exist;
  });

  it('has class comment-box', () => {
    expect(component).to.have.class('comment-box');
  });
  
  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('entering text in text area', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'dummy text');
    });

    it('should show text', () => {
      expect(component.find('textarea')).to.have.value('dummy text');
    });

    it('should clear input on submit', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });

  });

});