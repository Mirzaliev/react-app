import React, { Fragment } from 'react';
import style from './Layout.module.sass';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = (): JSX.Element => {
  return (
    <Fragment>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/users" style={style}>
          Users
        </NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </Fragment>
  );
};
