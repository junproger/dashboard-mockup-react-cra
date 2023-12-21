import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import Styles from './Row.module.css';
import { domain } from '../../helpers/domain';
import { lowtext } from '../../helpers/lowtext';
import { Site } from '../../types/ApiTypes';
import { Button } from '../Button/Button';

export type RowProp = {
  testid: string;
  testname: string;
  testtype: string;
  teststat: string;
  sitedata: Site | undefined;
};

export const Row: FC<RowProp> = ({ testid, testname, testtype, teststat, sitedata }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className={`${Styles.rowitem} ${!!sitedata && Styles[`brdcolor${sitedata.id}`]}`}>
      <div className={Styles.namecol}>{testname}</div>
      <div className={Styles.typecol}>{testtype.length > 3 ? lowtext(testtype) : testtype}</div>
      <div className={`${Styles.statcol} ${Styles[`stat${lowtext(teststat)}`]}`}>{lowtext(teststat)}</div>
      <div className={Styles.sitecol}>{!!sitedata && domain(sitedata.url)}</div>
      <div className={Styles.bttncol}>
        {teststat === 'DRAFT' ? (
          <Button bgcolor="grey49" callback={() => navigate(`/finalize/${testid}`)}>
            Finalize
          </Button>
        ) : (
          <Button bgcolor="shamrock" callback={() => navigate(`/results/${testid}`)}>
            Results
          </Button>
        )}
      </div>
    </div>
  );
};
