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

  state = {todo: "", todoItems: []};

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

    console.log(this.state.todoItems);

    event.preventDefault();
  }
 
  render() {
    return (
      <FormWrapper>
        <FormContainer>
          <TodoForm todoOnSubmit={this.handleTodoSubmit} todoOnChange={this.handleTodoChange} todoValue={this.state.todo} searchPlaceholder="What do you need to do?" submitText="Add it to the list" />
          <TodoList todoRemove={this.handleToDoRemove} todoArray={this.state.todoItems}/> 
        </FormContainer>   
      </FormWrapper> 
    );
  }
}
