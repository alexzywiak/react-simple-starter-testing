import { renderComponent, expect } from '../test_helper';

import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {

  let component;

  beforeEach(() => {
    const props = { comments: ['1', '2', '3'] };
    component = renderComponent(CommentList, null, props);
  });

  it('should render', () => {
    expect(component).to.exist;
  });

  it('shows an li for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('1');
    expect(component).to.contain('2');
    expect(component).to.contain('3');
  });
});