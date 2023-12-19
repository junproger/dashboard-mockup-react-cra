import { FC } from 'react';

import Styles from './Row.module.css';
import { domain } from '../../helpers/domain';
import { lowtext } from '../../helpers/lowtext';
import { Site } from '../../types/ApiTypes';

export type RowProp = {
  testname: string;
  testtype: string;
  teststat: string;
  sitedata: Site | undefined;
};

export const Row: FC<RowProp> = ({ testname, testtype, teststat, sitedata }): JSX.Element => {
  return (
    <div className={`${Styles.rowitem} ${!!sitedata && Styles[`brdcolor${sitedata.id}`]}`}>
      <div className={Styles.namecol}>{testname}</div>
      <div className={Styles.typecol}>{testtype.length > 3 ? lowtext(testtype) : testtype}</div>
      <div className={`${Styles.statcol} ${Styles[`stat${lowtext(teststat)}`]}`}>{lowtext(teststat)}</div>
      <div className={Styles.sitecol}>{!!sitedata && domain(sitedata.url)}</div>
      <div className={Styles.bttncol}>{teststat === 'DRAFT' ? 'Finalize' : 'Results'}</div>
    </div>
  );
};
