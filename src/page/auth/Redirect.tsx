import React, { FC } from 'react';
import style from './Redirect.module.sass';
import { Loading } from '../../components';

const Redirect: FC = () => {
  return (
    <div className={style.redirect}>
      <Loading />
    </div>
  );
};

export default Redirect;
