import React, { useEffect, useState } from 'react';
import style from './Home.module.sass';

import { Icon } from '../../components';


export const Home = (): JSX.Element => {
  const [s, set] = useState<number>(1);
  return (
    <div className={style.Home}>
      <b>{s}</b>
      {s > 8 ? '' : <Icon loading={s > 5 ? 'авторизация': null } src={'sdaasdasdasdasd'} /> }
      <button onClick={() => {
        set(s + 1);
      }}>++1</button>
    </div>
  );
};
