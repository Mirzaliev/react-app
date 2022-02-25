import React, { useCallback, useEffect } from "react";
import useAuth0 from "../../../store/auth0/auth0-hook";
import { Loading } from "../../../components";
import { Link } from "react-router-dom";



export const Login = (): JSX.Element => {
  const auth0 = useAuth0();
  const handleFormSubmit = useCallback(() => {
    // auth0.loginWithJira({
    //   iis: 111,
    //   finaly: 'sdfsdfsdfs',
    // });
    console.log('Авторизоваться');
    return 0;
  }, []);

  useEffect(() => console.log('Click был'), [handleFormSubmit]);
  return (
      <div>
        <button onClick={handleFormSubmit}>{ auth0.error ? 'Ошибки есть': 'Авторизоваться'}</button>
        { auth0.isLoading && <Loading/> }
        { console.log('Рендер') }
        <Link to="/home">About</Link>
      </div>
  );
};