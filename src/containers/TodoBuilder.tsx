import * as React from 'react';
import TodoForm from '../components/Todo/TodoForm';
import styled from 'styled-components';
import TodoList from '../components/Todo/TodoList';

export interface TodoBuilderProps {

}

export interface TodoBuilderState {
  todo: string;
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


export default class TodoBuilder extends React.Component<TodoBuilderProps, TodoBuilderState> {

  state: Readonly<TodoBuilderState> = {todo: "", todoItems: []};

  handleTodoChange = (event: React.FormEvent<HTMLInputElement>) : void => {
    this.setState({todo: event.currentTarget.value})
  }

  handleTodoSubmit = (event: React.FormEvent<HTMLButtonElement>) : void => {
    
    const newTodo: TodoItem = {
      date: new Date().getTime(),
      name: this.state.todo,
      completed: false
    }

    if(this.state.todo !== "") {
      this.setState((prevState) => ({
        todoItems: [...prevState.todoItems, newTodo]
      }), () => { 
        this.setState({todo: ""}) 
      });
    }
  }

  handleToDoRemove = (date: number) => {
    this.setState(prevState => ({ todoItems: prevState.todoItems.filter(todoItem => todoItem.date !== date) }));
  }
 
  render() {
    return (
      <FormWrapper>
        <FormContainer>
          <TodoForm todoOnSubmit={this.handleTodoSubmit} todoOnChange={this.handleTodoChange} todoValue={this.state.todo} />
          <TodoList todoRemove={this.handleToDoRemove} todoArray={this.state.todoItems}/> 
        </FormContainer>   
      </FormWrapper> 
    );
  }
}
