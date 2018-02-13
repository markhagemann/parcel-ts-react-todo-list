import * as React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../containers/TodoBuilder';

interface TodoListProps {
  todoArray: TodoItem[];
  todoRemove: any;
  todoComplete: any;
  filterComplete: () => void;
  filterIncomplete: () => void;
}

const FiltersContainer = styled.div`
  margin: 5px;

  label {
    display: block;
    text-align: left;
  }

  hr {
    color: #ddd;
    border-top: 2px solid #ddd;
    margin-left: -16px;
    margin-right: -16px;
  }
  
`;

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
    color: #73123c;
  }
`;

export const TodoList: React.SFC<TodoListProps> = (props) => {

  return (
      <>
        <FiltersContainer>
          <label> 
            <input onChange={() => props.filterComplete()} type="checkbox"/>
            Complete tasks 
          </label>
          <label> 
            <input onChange={() => props.filterIncomplete()} type="checkbox"/>
            Incomplete tasks
          </label>
          <hr/>
        </FiltersContainer>
        <List>
            {props.todoArray.map((todo: TodoItem, index: number) =>
              <li className={todo.completed ? 'completed' : ''} key={todo.date}>
                <div className="todo-container"> 
                  <input onChange={() => props.todoComplete(index)} className="completed-checkbox" type="checkbox" checked={todo.completed}/>
                  <span className="todo">{todo.name}</span>
                </div>
                <a href="#" onClick={() => props.todoRemove(todo.date)} className="remove-todo"> X </a>
              </li>
            )}
        </List>
      </>
  );
};
