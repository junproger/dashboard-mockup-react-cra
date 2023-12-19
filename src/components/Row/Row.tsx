import { FC } from 'react';

import Styles from './Row.module.css';
import { domain } from '../../helpers/domain';
import { Site } from '../../types/ApiTypes';

export type RowProp = {
  testname: string;
  testtype: string;
  teststat: string;
  sitedata: Site | undefined;
};

export const Row: FC<RowProp> = ({ testname, testtype, teststat, sitedata }): JSX.Element => {
  return (
    <div className={Styles.rowitem}>
      <div className={Styles.namecol}>{testname}</div>
      <div className={Styles.typecol}>{testtype}</div>
      <div className={Styles.statcol}>{teststat}</div>
      <div className={Styles.sitecol}>{!!sitedata && domain(sitedata.url)}</div>
    </div>
  );
};
