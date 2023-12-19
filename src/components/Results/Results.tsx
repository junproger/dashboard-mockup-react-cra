import { FC } from 'react';

import Styles from './Results.module.css';
import { domain } from '../../helpers/domain';
import { DataProp } from '../../types/DataProp';
import { Row } from '../Row/Row';

export const Results: FC<DataProp> = ({ datasites, datatests }): JSX.Element => {
  return (
    <div className={Styles.results}>
      {Boolean(datatests.length) &&
        datatests.map((test) => {
          return (
            <Row
              key={test.id}
              testname={test.name}
              testtype={test.type}
              teststat={test.status}
              sitename={domain(datasites, test.siteId)}
            />
          );
        })}
    </div>
  );
};
