import { FC } from 'react';

import Styles from './App.module.css';
import { Nested } from '../Nested/Nested';

export const App: FC = (): JSX.Element => {
  return (
    <div className={Styles.applayout}>
      <Nested pgtitle="Nested Page" tstname="Test Name" />
    </div>
  );
};
