import React, { ReactElement } from 'react';
import {Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children  }: {children: JSX.Element}) : ReactElement  => {
  const auth = false;
  let location = useLocation();
  console.log(auth);
  return (
      auth ? children : <Navigate to="/login" state={{ from: location }} replace />
  );
};