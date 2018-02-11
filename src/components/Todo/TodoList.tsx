import * as React from 'react';
import styled from 'styled-components';

interface TodoListProps {
  todoArray: string[];
  todoRemove: any;
}

const List = styled.ul`
  margin: 20px auto;
  padding: 15px;
  width: 300px;
  border: 1px solid #ddd;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  li {
    display: flex;
    justify-content: space-between;
    border: 1px solid #f6f6f6;
    list-style-type: none;
    padding: 15px;
  }
  li:hover {
    background: #eee;
  }
  .todo {
    justify-content: flex-start;
  }
  .remove-todo {
    justify-content: flex-end;
    margin-right: 0;
    text-decoration: none;
    font-size: 13px;
  }
`;

const TodoList: React.SFC<TodoListProps> = (props) => {

  return (
      <>
        <List>
            {props.todoArray.map((todo: string, index: number) =>
              <li key={index}>
                <span className="todo">{todo} </span>
                <a href="#" onClick={() => props.todoRemove(index)} className="remove-todo"> Remove </a>
              </li>
            )}
        </List>
      </>
  );
};

export default TodoList;