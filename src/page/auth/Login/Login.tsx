import React from "react";
import useAuth0 from "../../../store/auth0/auth0-hook";
import {Loading} from "../../../components";
import { Link } from "react-router-dom";



export const Login = (): JSX.Element => {
  const auth0 = useAuth0();
  const handleFormSubmit = () => {
    auth0.loginWithJira({
      iis: 111,
      finaly: 'sdfsdfsdfs',
    });
  };

  return (
      <div>
        <button onClick={handleFormSubmit}>{ auth0.error ? 'Ошибки есть': 'Авторизоваться'}</button>
        { auth0.isLoading && <Loading/> }
        <Link to="/home">About</Link>
      </div>
  );
};