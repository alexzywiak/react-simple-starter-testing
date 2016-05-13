import { combineReducers } from 'redux';

import comments from './comment_reducer';

const rootReducer = combineReducers({
  comments
});

export default rootReducer;
