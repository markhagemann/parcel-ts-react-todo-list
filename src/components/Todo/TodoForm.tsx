import * as React from 'react';

interface TodoFormProps {
    todoOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
    todoOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    todoValue: string;
    submitText: string;
    searchPlaceholder: string;
}

const TodoForm: React.SFC<TodoFormProps> = (props) => {
  return (
    <form onSubmit={props.todoOnSubmit}>
      <input onChange={props.todoOnChange} value={props.todoValue} type="text" placeholder={props.searchPlaceholder} />
      <button type="submit"> {props.submitText} </button>
    </form>
  );
};

export default TodoForm;