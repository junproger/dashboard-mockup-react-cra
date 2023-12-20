import { FC, memo } from 'react';

import Styles from './Sort.module.css';
import { SortMap } from '../../types/SortMap';
import { logging } from '../../utils/logging';

export type SortProp = {
  callsort: (sort: SortMap) => void;
  sortstate: { sort: SortMap; desc: boolean };
};

const SortMemo: FC<SortProp> = ({ callsort, sortstate }): JSX.Element => {
  logging('THE SORT COMPONENT IS RENDERED', sortstate);
  const viewsort = (sort: SortMap): string => {
    if (sortstate.sort === sort && sortstate.desc === false) {
      return 'ascend';
    } else if (sortstate.sort === sort && sortstate.desc === true) {
      return 'descend';
    }
    return '';
  };
  return (
    <div className={Styles.sort}>
      <div
        className={[Styles.name, Styles[viewsort(SortMap.name)]].join(' ').trim()}
        onClick={() => callsort(SortMap.name)}
      >
        NAME
      </div>
      <div
        className={[Styles.type, Styles[viewsort(SortMap.type)]].join(' ').trim()}
        onClick={() => callsort(SortMap.type)}
      >
        TYPE
      </div>
      <div
        className={[Styles.status, Styles[viewsort(SortMap.status)]].join(' ').trim()}
        onClick={() => callsort(SortMap.status)}
      >
        STATUS
      </div>
      <div
        className={[Styles.siteId, Styles[viewsort(SortMap.siteId)]].join(' ').trim()}
        onClick={() => callsort(SortMap.siteId)}
      >
        SITE
      </div>
    </div>
  );
};

export const Sort = memo(SortMemo);
