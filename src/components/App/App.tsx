import { FC } from 'react';

import Styles from './App.module.css';
import { Dashboard } from '../Dashboard/Dashboard';

export const App: FC = (): JSX.Element => {
  return (
    <div className={Styles.applayout}>
      <Dashboard />
    </div>
  );
};
