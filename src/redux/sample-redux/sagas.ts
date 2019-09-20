import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Types, SampleActionTypes } from './actions';

// sample function (simulates API call)
const fetchMessage = (message: string): Promise<string> => {
  const p: Promise<string> = new Promise((resolve): void => {
    setTimeout(() => {
      resolve(`${message.toUpperCase()} ${Math.random()}`);
    }, 2000);
  });

  return p;
};

// worker Saga: will be fired on SAMPLE_ACTION actions
const sampleFunction = function*(action: SampleActionTypes): SagaIterator {
  try {
    // This would also put() an action for indicating loading state, for example.
    const message: string = yield call(fetchMessage, action.message);
    yield put({ type: Types.SAMPLE_ACTION, message });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

const sampleSaga = function*(): SagaIterator {
  // takeLatest will only execute once and ignore action dispatches during the execution of sampleFunction
  yield takeLatest(Types.SAMPLE_ACTION_TRIGGER, sampleFunction);
};

export default sampleSaga;
