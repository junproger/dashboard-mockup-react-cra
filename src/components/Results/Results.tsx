import { FC } from 'react';

import Styles from './Results.module.css';
import { DataProp } from '../../types/DataProp';
import { Noresults } from '../Noresults/Noresults';
import { Row } from '../Row/Row';

export type ResultProp = DataProp & { resetvalue: () => void };

export const Results: FC<ResultProp> = ({ datasites, datatests, resetvalue }): JSX.Element => {
  return (
    <div className={Styles.results}>
      {datatests.length > 0 ? (
        datatests.map((test) => {
          return (
            <Row
              key={test.id}
              testid={`${test.id}`}
              testname={test.name}
              testtype={test.type}
              teststat={test.status}
              sitedata={datasites.find((site) => site.id === test.siteId)}
            />
          );
        })
      ) : (
        <Noresults resetvalue={resetvalue} />
      )}
    </div>
  );
};
