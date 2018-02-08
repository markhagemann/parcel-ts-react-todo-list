import * as React from 'react';
import TodoForm from '../components/Todo/TodoForm';
import styled from 'styled-components';
import TodoList from '../components/Todo/TodoList';

export interface TodoBuilderProps {

}

export interface TodoBuilderState {
  todo: string;
  todoItems: string[];
}

const FormWrapper = styled.div`
    text-align: center;
    margin: 15px
`;

export default class TodoBuilder extends React.Component<TodoBuilderProps, TodoBuilderState> {

  state = {todo: "", todoItems: ["Do the washing", "Clean kitchen", "Watch El Chapo"]};

  handleTodoChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({todo: event.currentTarget.value})
  }

  handleTodoSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    
    this.setState((prevState: any) => {
      return {todoItems: prevState.todoItems.push(prevState.todo)};
    });
  }
 
  render() {
    return (
      <FormWrapper>
        <TodoForm todoOnSubmit={this.handleTodoSubmit} todoOnChange={this.handleTodoChange} todoValue={this.state.todo} searchPlaceholder="What do you need to do?" submitText="Add to list" />
        <TodoList todoArray={this.state.todoItems}/>
      </FormWrapper> 
    );
  }
}
