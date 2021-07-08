import React, { FC } from 'react';

import classes from './SelectInput.module.scss';

type PropsSelectInput = {
  value?: string,
  completenessChange?: React.ChangeEventHandler<HTMLInputElement>,
};

const SelectInput: FC<PropsSelectInput> = ({ value }) => (
  <select className={classes.selectInput}>
    <option value="all">All</option>
    <option value="open">Open</option>
    <option value="close">Close</option>
  </select>
);

export default SelectInput;
