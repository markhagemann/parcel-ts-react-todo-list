import * as React from 'react';

interface TodoFormProps {
    todoOnChange: any;
    todoValue: string;
    submitText: string;
    searchPlaceholder: string;
}

const TodoForm: React.SFC<TodoFormProps> = (props) => {
  return (
    <>
    <input onChange={props.todoOnChange} value={props.todoValue} type="text" placeholder={props.searchPlaceholder} />
    <button type="submit"> {props.submitText} </button>
    </>
  );
};

export default TodoForm;