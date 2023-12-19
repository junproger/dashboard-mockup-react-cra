import { FC } from 'react';

import Styles from './Noresults.module.css';
import { Button } from '../Button/Button';

export type NoresProp = {
  resetvalue: () => void;
};

export const Noresults: FC<NoresProp> = ({ resetvalue }): JSX.Element => {
  return (
    <div className={Styles.noresults}>
      <div className={Styles.message}>Your search did not match any results.</div>
      <div className={Styles.resetbtn}>
        <Button bgcolor="shamrock" callback={resetvalue}>
          Reset
        </Button>
      </div>
    </div>
  );
};
