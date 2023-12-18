import { FC } from 'react';

import Styles from './Dashboard.module.css';
import { Noresults } from '../Noresults/Noresults';

export const Dashboard: FC = (): JSX.Element => {
  const results: boolean = false;
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <div className={Styles.search}>Search text</div>
      {results ? <div className={Styles.results}>Results</div> : <Noresults />}
    </>
  );
};
