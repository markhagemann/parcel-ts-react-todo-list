import * as React from 'react';
import styled from 'styled-components';
import { TodoItem, Filters } from '../../containers/TodoBuilder';

interface TodoListProps {
  todoShownArray: TodoItem[]
  todoTotalArray: TodoItem[]
  todoRemove: any
  todoComplete: any
  onFilterChange: (filter: Filters) => void
}

const FiltersContainer = styled.div`
  margin: 5px;
  text-align: left;

  h4 {
    margin: 10px 5px;
  }

  label {
    margin-left: 5px;
    color: #636363;
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
    justify-content: space-between;
  }
  .todo-item {
    display: flex;
    justify-content: center;
  }
  .assignee-container {
    color: #e3dfdf;
    margin-top: 5px;
    padding: 5px;
    background: #707070;
    border: 1px solid #585858;
    text-align: left;
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
        {props.todoTotalArray.length > 0 && 
          <FiltersContainer >
            <h4> Display: </h4>
            <label> 
              <input defaultChecked name="show" onChange={() => props.onFilterChange("all")} type="radio"/>
              All tasks
            </label>
            <label className="complete-tasks"> 
              <input name="show" onChange={() => props.onFilterChange("complete")} type="radio"/>
              Complete tasks 
            </label>
            <label className="incomplete-tasks"> 
              <input name="show" onChange={() => props.onFilterChange("incomplete")} type="radio"/>
              Incomplete tasks
            </label>
            <hr/>
          </FiltersContainer>
        }
        
        <List>
            {props.todoShownArray.map((todo: TodoItem) =>
              <li className={todo.completed ? 'completed' : ''} key={todo.date}>
                <div className="todo-container" >
                  <div className="todo-item"> 
                    <input onChange={() => props.todoComplete(todo)} className="completed-checkbox" type="checkbox" checked={todo.completed}/>
                    <span className="todo">{todo.name}</span>
                  </div>
                  <a href="#" onClick={() => props.todoRemove(todo.date)} className="remove-todo"> X </a>
                </div>
                <div className="assignee-container">
                    <span> Assigned to: {todo.assignedTo} </span> 
                </div>
              </li>
            )}
        </List>
      </>
  );
};
