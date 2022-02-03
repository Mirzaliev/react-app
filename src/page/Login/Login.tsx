import { LoginProps } from "./Login.props";
import React, { SyntheticEvent, useCallback, useState } from "react";
// @ts-ignore
import style from "./Login.module.sass";
import { useParams, useSearchParams } from "react-router-dom";
import { ErrorBoundary } from "../../components";

export const Login = (): JSX.Element => {


  // const { userId } = useParams<"userId">();
  // const [searchParams, setSearchParams] = useSearchParams();

  const [error, setError] = useState<boolean>(false);
  //
  // const searchTerm = searchParams.get('name') || '';

  const callError = async () => {
    try {
      throw new Error();
    } catch(_error) {
      console.log({ _error });
      setError(true);
    }
  };

  throw new Error('dsfsdfsdfsdfsdf');

  return (
        <div className={style.Login}>Login : <button onClick={callError}>set error</button></div>
  );
};