import { combineReducers } from 'redux';

import sampleReducer from 'redux/sample-redux/reducer';

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export type GlobalState = ReturnType<typeof rootReducer>;

export default rootReducer;
