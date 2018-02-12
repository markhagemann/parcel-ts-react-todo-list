import * as React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../containers/TodoBuilder';

interface TodoListProps {
  todoArray: TodoItem[];
  todoRemove: any;
  todoComplete: any;
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
    font-size: 15px;
    font-weight: bold;
  }
  .todo-container {
    display: flex;
    justify-content: center;
  }
  .completed-checkbox {
    margin-top: 6px;
    margin-right: 8px;
  }
  .completed, .completed:hover{
    color: #fff;
    background: #74a83e;
  }
  .completed .remove-todo {
    color: #545454;
  }
`;

const TodoList: React.SFC<TodoListProps> = (props) => {

  return (
      <>
        <List>
            {props.todoArray.map((todo: TodoItem, index: number) =>
              <li className={todo.completed ? 'completed' : ''} key={todo.date}>
                <div className="todo-container"> 
                  <input onClick={() => props.todoComplete(index)} className="completed-checkbox" type="checkbox" checked={todo.completed}/>
                  <span className="todo">{todo.name}</span>
                </div>
                <a href="#" onClick={() => props.todoRemove(todo.date)} className="remove-todo"> X </a>
              </li>
            )}
        </List>
      </>
  );
};

export default TodoList;