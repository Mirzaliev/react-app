import { LoginProps } from "./Login.props";
import React from "react";
// @ts-ignore
import style from "./Login.module.sass";
import { useParams, useSearchParams } from "react-router-dom";

export const Login = (): JSX.Element => {


  const { userId } = useParams<"userId">();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('name') || '';

  return (<div className={style.Login}>Login : {userId ? userId : ''}</div>);
};