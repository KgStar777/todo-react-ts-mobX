import React from 'react';

import classes from './ButtonWrapper.module.scss';

const ButtonWrapper: React.FC = ({ children }) => (
  <div className={classes.ButtonWrapper}>
    {children}
  </div>
);

export default ButtonWrapper;
