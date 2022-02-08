import React from "react";
import style from './Home.module.sass';
import {useSearchParams} from "react-router-dom";

export const Home = (): JSX.Element => {

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('code'));
  return (<div className={style.Home}>sdgfsdfsdfdfsdf</div>);
  
};