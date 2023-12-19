import { FC } from 'react';

import Styles from './Results.module.css';
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
              sitedata={datasites.find((site) => site.id === test.siteId)}
            />
          );
        })}
    </div>
  );
};
