import React, { useContext, useState } from 'react';
import './Home.module.css';
import { css, jsx, Global, ClassNames, ThemeContext } from '@emotion/react';
import Button from '@atlaskit/button';


export const Home = (): JSX.Element => {

  const [color, setColor] = useState<string>('red');
  const a  = useContext(ThemeContext);

  return (<div>dsfds</div>);
};
