import * as React from 'react';
import { TodoForm } from '../components/Todo/TodoForm';
import styled from 'styled-components';
import { TodoList } from '../components/Todo/TodoList';

export interface TodoBuilderProps {

}

export interface TodoBuilderState {
  todoItems: TodoItem[];
}

export interface TodoItem {
  date: number;
  name: string
  completed: boolean
}

const FormWrapper = styled.div`
    margin: 15px;
`;

const FormContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    background: #fff;
    max-width: 290px;
    border: 1px solid #ddd;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export class TodoBuilder extends React.Component<TodoBuilderProps, TodoBuilderState> {

  state: Readonly<TodoBuilderState> = {
    todoItems: []
  };

  handleTodoAdd = (name: string) : void => {
    const newTodo: TodoItem = {
      date: new Date().getTime(),
      name,
      completed: false
    }
    this.setState((prevState) => ({
      todoItems: [...prevState.todoItems, newTodo]
    }));
  }

  handleTodoRemove = (date: number) => {
    this.setState(prevState => ({ todoItems: prevState.todoItems.filter(todoItem => todoItem.date !== date) }));
  }

  handleTodoComplete = (index: number) => {
    this.setState( (prevState) => {
      const newTodoItems = prevState.todoItems;
      newTodoItems[index].completed = !prevState.todoItems[index].completed; 

      return {todoItems: newTodoItems}
    });
  }
 
  render() {
    return (
      <FormWrapper>
        <FormContainer>
          <TodoForm onCreate={this.handleTodoAdd} />
          <TodoList todoComplete={this.handleTodoComplete} todoRemove={this.handleTodoRemove} todoArray={this.state.todoItems}/> 
        </FormContainer>   
      </FormWrapper> 
    );
  }
}
