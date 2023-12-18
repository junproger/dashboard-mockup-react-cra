import { FC } from 'react';

import Styles from './Results.module.css';
import { domain } from '../../helpers/domain';
import { DataProp } from '../../types/DataProp';

export const Results: FC<DataProp> = ({ datasites, datatests }): JSX.Element => {
  return (
    <div className={Styles.results}>
      {Boolean(datatests.length) &&
        datatests.map((test) => {
          return (
            <p key={test.id}>
              TEST: {test.name}, SITE: {domain(datasites, test.siteId)}
            </p>
          );
        })}
    </div>
  );
};
