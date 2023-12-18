import { FC } from 'react';

import Styles from './Dashboard.module.css';
import { Noresults } from '../Noresults/Noresults';
import { Results } from '../Results/Results';

export const Dashboard: FC = (): JSX.Element => {
  const results: boolean = true;
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <div className={Styles.search}>Search text</div>
      {results ? <Results /> : <Noresults />}
    </>
  );
};
