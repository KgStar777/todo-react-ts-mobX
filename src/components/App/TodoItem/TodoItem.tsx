import React from 'react';

import classes from './TodoItem.module.scss';

const srcCompletedItem = 'https://cdn1.iconfinder.com/data/icons/airline-flight-booking-mobile-app/15/true-check-accept-approve-20.png';
const srcNotCompletedItem = 'https://cdn1.iconfinder.com/data/icons/airline-flight-booking-mobile-app/15/false-cross-reject-decline-20.png';

type TodoItemProps = {
  title: string;
  completed: boolean;
};

const TodoItem: React.FC<TodoItemProps> = (
  {
    title,
    completed,
  },
) => (
  <div>
    {completed
      ? (
        <img
          alt="tr"
          className={classes.imageBox}
          src={srcCompletedItem}
        />
      )
      : (
        <img
          alt="fl"
          className={classes.imageBox}
          src={srcNotCompletedItem}
        />
      )}
    <h4 className={classes.title}> {title}</h4>
  </div>
);

export default TodoItem;
