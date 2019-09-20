import { GlobalState } from 'redux/reducers';

export const getMessage = (state: GlobalState): string => state.sample.message;
