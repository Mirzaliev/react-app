import React, { lazy, useEffect, useState, Suspense } from 'react';
import style from './Home.module.sass';
//import { Icon } from '../../assets/icons/activity.svg';
import { ReactSVG } from 'react-svg';
import award from "../../components/ui/Icons/Award";
import { Loading } from "../../components";


export const Home = (): JSX.Element => {
  const [s, set] = useState<number>(1);

  const Icon = lazy(() => import('../../components/ui/Icons/Activity'));
  
  return (
    <div className={style.Home}>
      <b>{s}</b>
      <Suspense fallback={Loading}>
          <Icon/>
      </Suspense>

      <button onClick={() => {
        set(s + 1);
      }}>++1</button>
    </div>
  );
};
