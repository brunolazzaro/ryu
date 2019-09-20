import { createReducer } from 'redux/utils';
import { Types, SampleActionTypes } from './actions';

export interface SampleState {
  message: string;
}

const initialState: SampleState = {
  message: '',
};

const handleSampleAction = (
  state: SampleState,
  action: SampleActionTypes,
): SampleState => ({
  ...state,
  message: action.message,
});

const actionHandlers = {
  [Types.SAMPLE_ACTION]: handleSampleAction,
};

export default createReducer<SampleState, SampleActionTypes>(
  initialState,
  actionHandlers,
);
