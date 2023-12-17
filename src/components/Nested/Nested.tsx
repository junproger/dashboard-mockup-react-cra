import { FC } from 'react';

import Styles from './Nested.module.css';

export const Nested: FC = (): JSX.Element => {
  return (
    <>
      <h1 className={Styles.pagetitle}>Nested Page</h1>
      <div className={Styles.testname}>Test Name</div>
      <div className={Styles.backlink}>Back</div>
    </>
  );
};
