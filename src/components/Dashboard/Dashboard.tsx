import { FC } from 'react';

import Styles from './Dashboard.module.css';
import { DataProp } from '../../types/DataProp';
import { Noresults } from '../Noresults/Noresults';
import { Results } from '../Results/Results';

export const Dashboard: FC<DataProp> = ({ datasites, datatests }): JSX.Element => {
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <div className={Styles.search}>Search text</div>
      {datatests.length > 0 ? <Results datasites={datasites} datatests={datatests} /> : <Noresults />}
    </>
  );
};
