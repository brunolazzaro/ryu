import React, { useEffect } from 'react';

// Style imports.
import styles from './style.module.css';

interface Props {
  info: string;
}

const App: React.FunctionComponent<Props> = ({ info }) => {
  useEffect(() => {
    document.title = `The info is ${info}`;
  }, [info]);

  return (
    <div>
      <a className={styles.module} href="#somelink">
        Hello, {info}
      </a>
    </div>
  );
};

export default App;
