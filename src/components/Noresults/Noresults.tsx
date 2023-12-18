import { FC } from 'react';

import Styles from './Noresults.module.css';

export const Noresults: FC = (): JSX.Element => {
  return (
    <div className={Styles.noresults}>
      <div className={Styles.message}>Your search did not match any results.</div>
    </div>
  );
};
