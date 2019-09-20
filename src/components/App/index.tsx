import React, { useEffect, useCallback } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import { Actions as SampleActions } from 'redux/sample-redux/actions';
import { getMessage } from 'redux/sample-redux/selectors';

// Style imports.
import styles from './style.module.css';

interface Props {
  info: string;
}

const App: React.StatelessComponent<Props> = ({ info }) => {
  const dispatch = useDispatch();
  const message: string = useSelector(getMessage);

  useEffect(() => {
    document.title = `The info is ${info}`;
  }, [info]);

  const updateMessage = useCallback(() => {
    dispatch(SampleActions.sampleActionTrigger(info));
  }, [dispatch, info]);

  return (
    <div>
      <a className={styles.module} href="#somelink" onClick={updateMessage}>
        Hello, {info}
      </a>
      <p>{message}</p>
    </div>
  );
};

export default connect()(App);
