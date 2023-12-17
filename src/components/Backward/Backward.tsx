import { FC } from 'react';

import Styles from './Backward.module.css';

export const Backward: FC = (): JSX.Element => {
  return (
    <div className={Styles.backlink}>
      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="#222222">
        <path
          d="M8.10419 16L0.937805 8.83362L0.104186 8L0.937805 7.16638L8.10419 0L8.93781 0.833619L1.77142 8L8.93781 15.1664L8.10419 16Z"
          fill="#222222"
        />
      </svg>
      <span className={Styles.backtext}>Back</span>
    </div>
  );
};
