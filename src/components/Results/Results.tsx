import { FC } from 'react';

import Styles from './Results.module.css';
import { useCustomSort } from '../../hooks/useCustomSort';
import { DataProp } from '../../types/DataProp';
import { Noresults } from '../Noresults/Noresults';
import { Row } from '../Row/Row';
import { Sort } from '../Sort/Sort';

export type ResultProp = DataProp & { resetvalue: () => void };

export const Results: FC<ResultProp> = ({ datasites, datatests, resetvalue }): JSX.Element => {
  const { callsort, sortdata, sortstate } = useCustomSort(datatests);
  return (
    <div className={Styles.results}>
      <Sort callsort={callsort} sortstate={sortstate} />
      {datatests.length > 0 ? (
        sortdata.map((test) => {
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
