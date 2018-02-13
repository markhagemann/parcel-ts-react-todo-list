import * as React from 'react';
import styled from 'styled-components';

const FormHolder = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  margin: 15px auto;

  input {
    font-family: 'Titillium Web', sans-serif;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #3b4f98;
    margin-bottom: 5px;
  }
  button {
    font-family: 'Titillium Web', sans-serif;
    font-size: 15px;
    color: #fff;
    padding:10px;
    background: #3b4f98;
    border: 2px solid #3b4f98;
  }
  button:hover{
    cursor: pointer;
    background: #5066ba;
    border-color: #4965d1;
  }
`;

interface TodoFormState {
  todo: string;
}

interface TodoFormProps {
  onCreate: (name: string) => void;
}

export class TodoForm extends React.Component<TodoFormProps, TodoFormState> { 

  state: Readonly<TodoFormState> = {
    todo: ""
  };

  handleTodoChange = (event: React.FormEvent<HTMLInputElement>) : void => {
    this.setState({todo: event.currentTarget.value})
  }

  handleOnClick = () => {
    this.props.onCreate(this.state.todo);
    this.setState({ todo: "" });
  }

  render() {
    return (
      <FormHolder>
        <input onChange={this.handleTodoChange} value={this.state.todo} type="text" placeholder="What do you need to do?" />
        <button onClick={this.handleOnClick}> Add it to the list </button>
      </FormHolder>
    );
  }
 
};
