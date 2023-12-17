import { FC } from 'react';

import Styles from './Nested.module.css';

export type NestedProp = {
  pgtitle: string;
  tstname: string;
};

export const Nested: FC<NestedProp> = ({ pgtitle, tstname }): JSX.Element => {
  return (
    <>
      <h1 className={Styles.pagetitle}>{pgtitle || 'Nested Page'}</h1>
      <div className={Styles.testname}>{tstname || 'Test Name'}</div>
      <div className={Styles.backlink}>Back</div>
    </>
  );
};
