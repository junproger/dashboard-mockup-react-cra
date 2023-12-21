import { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Styles from './Nested.module.css';
import { endpoints } from '../../constants/endpoints';
import { fetchurl } from '../../constants/fetchurl';
import { Test } from '../../types/ApiTypes';
import { Backward } from '../Backward/Backward';
import { Loader } from '../Loader/Loader';

export type NestedProp = {
  pgtitle: string;
};

export const Nested: FC<NestedProp> = ({ pgtitle }): JSX.Element => {
  const { id } = useParams();
  const [getTest, setTest] = useState<string>('');
  useEffect(() => {
    const request = fetchurl.distant + endpoints.tests + id;
    fetch(request, { method: 'GET' })
      .then((res) => res.json())
      .then((data: Test) => setTest(data.name));
  }, [id]);
  return (
    <>
      {Boolean(getTest) ? (
        <div>
          <h1 className={Styles.pagetitle}>{pgtitle || 'Nested Page'}</h1>
          <div className={Styles.testname}>{getTest || 'Test Name'}</div>
        </div>
      ) : (
        <Loader />
      )}
      <Backward />
    </>
  );
};
