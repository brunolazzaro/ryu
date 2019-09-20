import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';

// Sagas
import sampleSaga from 'redux/sample-redux/sagas';

// Export
export default function* root(): SagaIterator {
  yield fork(sampleSaga);
}
