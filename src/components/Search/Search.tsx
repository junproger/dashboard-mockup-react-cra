import { ChangeEvent, FC, RefObject, memo } from 'react';

import Styles from './Search.module.css';

export type SearchProp = {
  passingref: RefObject<HTMLInputElement>;
  callvalue: (value: string) => void;
  resetvalue: () => void;
  amount: number;
};

const SearchMemo: FC<SearchProp> = ({ passingref, callvalue, resetvalue, amount }) => {
  const inputHandler = (evnt: ChangeEvent<HTMLInputElement>): void => {
    callvalue(evnt.target.value);
  };
  return (
    <div className={Styles.search}>
      <div className={Styles.magnifier} title="New Search" onClick={() => resetvalue()}>
        <div className={Styles.loupe}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="#222222">
            <path
              d="M12.802 12.751L9.59779 9.28668C10.4217 8.26764 10.8735 6.98629 10.8735 5.65218C10.8735 2.53599 8.43501 0 5.43575 0C2.43851 0 0 2.53529 0 5.65218C0 8.76978 2.43851 11.3051 5.43575 11.3051C6.56132 11.3051 7.6348 10.9527 8.55068 10.2818L11.7799 13.7735C11.9152 13.9198 12.0958 14 12.2913 14C12.4746 14 12.6491 13.9269 12.7817 13.7939C13.0651 13.5119 13.0733 13.045 12.802 12.751ZM5.43575 1.47476C7.65171 1.47476 9.45506 3.34897 9.45506 5.65218C9.45506 7.95609 7.65239 9.83031 5.43575 9.83031C3.22113 9.83031 1.41846 7.95609 1.41846 5.65218C1.41846 3.34968 3.22113 1.47476 5.43575 1.47476Z"
              fill="#222222"
            />
          </svg>
        </div>
      </div>
      <input
        type="text"
        defaultValue=""
        ref={passingref}
        name="Inputfield"
        onChange={inputHandler}
        aria-label="Input field"
        className={Styles.input}
        placeholder="What test are you looking for?"
      ></input>
      <div className={Styles.amount}>{amount} tests</div>
    </div>
  );
};

export const Search = memo(SearchMemo);
