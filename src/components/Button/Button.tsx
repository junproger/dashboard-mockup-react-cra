import { FC, ReactNode } from 'react';

import Styles from './Button.module.css';

export type ButtonProp = {
  bgcolor?: string;
  callback: () => void;
  children: ReactNode;
};

export const Button: FC<ButtonProp> = ({ bgcolor = 'shamrock', callback, children }): JSX.Element => {
  return (
    <button className={`${Styles.button} ${Styles[bgcolor]}`} onClick={callback}>
      {children}
    </button>
  );
};
