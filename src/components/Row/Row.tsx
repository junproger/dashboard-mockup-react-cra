import { FC } from 'react';

import Styles from './Row.module.css';

export type RowProp = {
  testname: string;
  testtype: string;
  teststat: string;
  sitename: string;
};

export const Row: FC<RowProp> = ({ testname, testtype, teststat, sitename }): JSX.Element => {
  return (
    <div className={Styles.rowitem}>
      <div className={Styles.namecol}>{testname}</div>
      <div className={Styles.typecol}>{testtype}</div>
      <div className={Styles.statcol}>{teststat}</div>
      <div className={Styles.sitecol}>{sitename}</div>
    </div>
  );
};
