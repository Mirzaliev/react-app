import React, { useState } from 'react';
import './Home.module.css';
import { css, jsx } from '@emotion/react';
import Button from '@atlaskit/button';


export const Home = (): JSX.Element => {

  const [color, setColor] = useState<string>('red');

  return (<a href="#" css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}>fdsfsdfdsfsdfs</a>);
};
