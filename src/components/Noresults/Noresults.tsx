import { FC } from 'react';

import Styles from './Noresults.module.css';
import { logging } from '../../utils/logging';
import { Button } from '../Button/Button';

export const Noresults: FC = (): JSX.Element => {
  return (
    <div className={Styles.noresults}>
      <div className={Styles.message}>Your search did not match any results.</div>
      <div className={Styles.resetbtn}>
        <Button bgcolor="shamrock" callback={() => logging('reset')}>
          Reset
        </Button>
      </div>
    </div>
  );
};
