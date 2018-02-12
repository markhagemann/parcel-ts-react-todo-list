import * as React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../containers/TodoBuilder';

interface TodoListProps {
  todoArray: TodoItem[];
  todoRemove: any;
}

const List = styled.ul`
  margin: 20px auto;
  padding: 0px;
  max-width: 270px;

  li {
    display: flex;
    justify-content: space-between;
    border: 1px solid #f6f6f6;
    list-style-type: none;
    padding: 15px;
  }
  li:hover {
    background: #eee;
    border-color: #ddd;
  }
  .todo {
    justify-content: flex-start;
  }
  .remove-todo {
    color: #cc4a00;
    justify-content: flex-end;
    margin-right: 0;
    text-decoration: none;
    font-size: 13px;
    font-weight: bold;
  }
`;

const TodoList: React.SFC<TodoListProps> = (props) => {

  return (
      <>
        <List>
            {props.todoArray.map((todo: TodoItem) =>
              <li key={todo.date}>
                <span className="todo">{todo.name}</span>
                <a href="#" onClick={() => props.todoRemove(todo.date)} className="remove-todo"> Remove </a>
              </li>
            )}
        </List>
      </>
  );
};

export default TodoList;