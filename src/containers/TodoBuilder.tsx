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
    margin: 15px;
`;

export default class TodoBuilder extends React.Component<TodoBuilderProps, TodoBuilderState> {

  state = {todo: "", todoItems: ["Test"]};

  handleTodoChange = (event: React.FormEvent<HTMLInputElement> ) : void => {
    this.setState({todo: event.currentTarget.value})
  }

  handleTodoSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
    let itemArray = this.state.todoItems;

    if(this.state.todo !== "") {
      itemArray.push(this.state.todo);

      this.setState( {
        todoItems: itemArray
      });
  
      this.state.todo = "";
    } 

    console.log(this.state.todoItems);

    event.preventDefault();
  }

  handleToDoRemove = (key: number) => {
    let itemArray = this.state.todoItems;

    itemArray.splice(key, 1);

    this.setState( {
      todoItems: itemArray
    });

    event.preventDefault();
  }
 
  render() {
    return (
      <FormWrapper>
        <TodoForm todoOnSubmit={this.handleTodoSubmit} todoOnChange={this.handleTodoChange} todoValue={this.state.todo} searchPlaceholder="What do you need to do?" submitText="Add to list" />
        <TodoList todoRemove={this.handleToDoRemove} todoArray={this.state.todoItems}/>
      </FormWrapper> 
    );
  }
}
