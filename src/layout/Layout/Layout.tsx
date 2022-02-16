import React, { Fragment } from 'react';
import style from './Layout.module.sass';
import { NavLink, Outlet } from 'react-router-dom';
import { useTheme as _useTheme } from "../../components/ui/theme/utils/useThemeContext";


export const Layout = (): JSX.Element => {
  const [active, setActive] = React.useState(0);
   const gggggg = _useTheme({ mode: 'light' });
  const onChangeValue = (value: number) => {
    setActive(value);
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
            checked={active === 0}
            onChange={() => onChangeValue(0)}
          />
          <label style={{ marginRight: 10 }} htmlFor="111111">
            Черная
          </label>

          <input
            type="radio"
            id="222222"
            checked={active === 1}
            onChange={() => onChangeValue(1)}
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
