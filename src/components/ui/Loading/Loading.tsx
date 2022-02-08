import React from 'react';
import { ReactComponent as LoadingIcon } from "./loading.svg";
import style from './Loading.module.sass';

export const Loading = () => {
  return (
      <div className={style.loadingWrapper}>
        <div className={style.loading}>
          <LoadingIcon/>
        </div>
      </div>
  );
};

