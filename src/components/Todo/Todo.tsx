import * as React from 'react';

interface TodoProps {
    todoName: string;
}

const Todo: React.SFC<TodoProps> = (props) => {
  return (
      <>
        <li> {props.todoName} </li>
      </>
  );
};

export default Todo;