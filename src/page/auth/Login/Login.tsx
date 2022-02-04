import { LoginProps } from "./Login.props";
import React, {SyntheticEvent, useCallback, useEffect, useState} from "react";
// @ts-ignore
import style from "./Login.module.sass";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import { ErrorBoundary } from "../../../components";
import {useErrorHandling} from "../../../components/ErrorBoundary";
import {useStore} from "../../../store/AppStore";

export const Login = (): JSX.Element => {


  const { userId } = useParams<"userId">();
  const [store, dispatch] = useStore();

  const handleFormSubmit = useCallback(
      async (event: SyntheticEvent) => {
        event.preventDefault();

        localStorage.setItem('auth', 'true');

        dispatch({ type: 'LOG_IN' });

      },
      [dispatch]
  );
  // const [searchParams, setSearchParams] = useSearchParams();

  // const [error, setError] = useState<boolean>(false);
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('code'));
  // //
  // // const searchTerm = searchParams.get('name') || '';
  // const triggerError = useErrorHandling();
  //
  // const callError = async () => {
  //   try {
  //     throw new Error('sdfsdfsdfsdfs');
  //   } catch(e) {
  //     triggerError(e);
  //   }
  // };

///         <div className={style.Login}>Login : <a href="https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=ZbHtubcuwV0jg2xy3fUFIRRvj2WMdjxn&scope=read%3Ajira-user%20manage%3Ajira-webhook%20manage%3Ajira-project%20manage%3Ajira-data-provider%20manage%3Ajira-configuration%20read%3Ajira-work%20write%3Ajira-work&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent">Авторзация</a></div>
  return (
      <div><a href="" onClick={handleFormSubmit}>{ store.isAuth ? 'Авторизованы!' : 'Логиниться'}</a></div>
  );
};