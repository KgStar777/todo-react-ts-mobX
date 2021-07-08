import React from 'react';

import classes from './Button.module.scss';

type PropsButton = {
  title: string;
  goToTopOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  showMoreOnClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isActive?: string;
};

const Button: React.FC<PropsButton> = (props) => (
// eslint-disable-next-line
  <button onClick={props.onClick} className={classes.Button}>
    {props.title}
  </button>
);

export default Button;
