import { FC } from 'react';

import Styles from './Dashboard.module.css';
import { DataProp } from '../../types/DataProp';
import { Noresults } from '../Noresults/Noresults';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';

export const Dashboard: FC<DataProp> = ({ datasites, datatests }): JSX.Element => {
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <Search />
      {datatests.length > 0 ? <Results datasites={datasites} datatests={datatests} /> : <Noresults />}
    </>
  );
};
