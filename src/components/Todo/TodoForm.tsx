import * as React from 'react';
import styled from 'styled-components';

const Form = styled.form`
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

interface TodoFormProps {
    todoOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
    todoOnSubmit: (event: React.FormEvent<HTMLButtonElement>) => void;
    todoValue: string;
}

const TodoForm: React.SFC<TodoFormProps> = (props) => {
  return (
    <Form>
      <input onChange={props.todoOnChange} value={props.todoValue} type="text" placeholder="What do you need to do?" />
      <button onClick={props.todoOnSubmit} type="submit"> Add it to the list </button>
    </Form>
  );
};

export default TodoForm;