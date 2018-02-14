import * as React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../../containers/TodoBuilder';

interface TodoListProps {
  todoShownArray: TodoItem[];
  todoTotalArray: TodoItem[];
  todoRemove: any;
  todoComplete: any;
  filterComplete: () => void;
  filterIncomplete: () => void;
  filterNone: () => void;
}

const FiltersContainer = styled.div`
  margin: 5px;
  text-align: left;

  h4 {
    margin: 10px 5px;
  }

  label {
    margin-left: 5px;
    color: #3b4f98;
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  input {
    margin: 0 5px 0 0;
  }

  .complete-tasks {
    color: #74a83e;
  }

  .incomplete-tasks {
    color: #cc4a00;
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
    border: 1px solid #dedede;
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
  .completed {
    color: #fff;
    background: #74a83e;
  }
  .completed:hover {
    background: #8aca49;
  }
  .completed .remove-todo {
    color: #73123c;
  }
`;

export const TodoList: React.SFC<TodoListProps> = (props) => {

  return (
      <>
        {props.todoTotalArray.length > 0 ? 
          <FiltersContainer>
            <h4> Display: </h4>
            <label> 
              <input defaultChecked name="show" onChange={() => props.filterNone()} type="radio"/>
              All tasks
            </label>
            <label className="complete-tasks"> 
              <input name="show" onChange={() => props.filterComplete()} type="radio"/>
              Complete tasks 
            </label>
            <label className="incomplete-tasks"> 
              <input name="show" onChange={() => props.filterIncomplete()} type="radio"/>
              Incomplete tasks
            </label>
            <hr/>
          </FiltersContainer> 
          : 
           null
        }
        
        <List>
            {props.todoShownArray.map((todo: TodoItem, index: number) =>
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
