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
  name: string
  completed: boolean
}

const FormWrapper = styled.div`
    text-align: center;
    margin: 15px;
`;

export default class TodoBuilder extends React.Component<TodoBuilderProps, TodoBuilderState> {

  state: Readonly<TodoBuilderState> = {todo: "", todoItems: []};

  handleTodoChange = (event: React.FormEvent<HTMLInputElement> ) : void => {
    this.setState({todo: event.currentTarget.value})
  }

  handleTodoSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
    
    const newTodo: TodoItem = {
      name: this.state.todo,
      completed: false
    }

    if(this.state.todo !== "") {
      this.setState((prev) => ({
        todoItems: [...prev.todoItems, newTodo]
      }), () => { 
        this.setState({todo: ""}) 
      });
    }
    event.preventDefault()
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
