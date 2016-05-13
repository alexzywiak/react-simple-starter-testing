import {expect} from '../test_helper';

import commentReducer from '../../src/reducers/comment_reducer';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Reducers', () => {

  it('should return an empty array by default', () => {
    const result = commentReducer(undefined, {});
    expect(result).to.eql([]);
  });

  it('should add a new comment when saveComment is called', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment'
    };

    const result = commentReducer(undefined, action);
    expect(result).to.eql(['new comment']);
  });

  it('should push additional comments when saveComment is called', () => {
    const actions = [{
      type: SAVE_COMMENT,
      payload: 'new comment'
    }, {
      type: SAVE_COMMENT,
      payload: 'second comment'
    }];

    const result = actions.reduce(commentReducer, undefined);
    expect(result).to.eql(['new comment', 'second comment']);
  });

});