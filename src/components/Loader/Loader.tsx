import { FC } from 'react';

import Styles from './Loader.module.css';

export const Loader: FC = (): JSX.Element => {
  return <div className={Styles.loader}></div>;
};
