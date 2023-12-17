import { FC } from 'react';

import Styles from './App.module.css';

export const App: FC = (): JSX.Element => {
  return (
    <div className={Styles.applayout}>
      <div className={Styles.dashboard}>Dashboard</div>
    </div>
  );
};
