import React, { FC } from 'react';
import styles from './Box.module.scss';

interface BoxProps {}

const Box: FC<BoxProps> = () => {
  let i = 5;

  return (
    <div>
      <div>
        <p>
          <span>asdasdsadsad</span>
        </p>
      </div>
    </div>
  );
};

export default Box;
