import React, { Fragment } from 'react';
import style from './Layout.module.sass';
import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from "../../components/ui/theme/Theme";


export const Layout = (): JSX.Element => {

  const { theme, setTheme } = useTheme();



  const onChangeValue = (value: string) => {
    setTheme(value);
  };


  return (
    <Fragment>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <div>
          <NavLink to="/home" style={style}>
            Home
          </NavLink>
          <NavLink to="/users" style={style}>
            Users
          </NavLink>
        </div>

        <div>
          <input
            type="radio"
            id="111111"
            checked={theme === 'dark'}
            onChange={() => onChangeValue('dark')}
          />
          <label style={{ marginRight: 10 }} htmlFor="111111">
            Черная
          </label>

          <input
            type="radio"
            id="222222"
            checked={theme === 'light'}
            onChange={() => onChangeValue('light')}
          />
          <label htmlFor="222222">Белая</label>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
