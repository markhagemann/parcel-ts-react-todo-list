import * as React from 'react';
import styled from 'styled-components';
import { FormHolder } from '../../common/styled-components';
import { TeamMember } from '../../containers/TeamManager';

interface TodoFormState {
  todo: string
  todoAssignee: string
}

interface TodoFormProps {
  teamMemberArray: TeamMember[];
  onCreate: (name: string, todoAssignee: string) => void
}

export class TodoForm extends React.Component<TodoFormProps, TodoFormState> {

  state: Readonly<TodoFormState> = {
    todo: "",
    todoAssignee: "",
  };

  handleTodoChange = (event: React.FormEvent<HTMLInputElement>) : void => {
    this.setState({todo: event.currentTarget.value})
  }

  handleTodoAssigneeChange = (event: React.FormEvent<HTMLSelectElement>) : void => {
    this.setState({todoAssignee: event.currentTarget.value})
    console.log(event.currentTarget.value);
  }

  handleOnClick = () => {
    if(this.state.todo != '' && this.state.todoAssignee != '') {
        this.props.onCreate(this.state.todo, this.state.todoAssignee);
        this.setState({ todo: "", todoAssignee: ""});
    } 
  }

  render() {

    return (
      <FormHolder>
        <input onChange={this.handleTodoChange} value={this.state.todo} type="text" placeholder="What needs to be done?" />
        <select value={this.state.todoAssignee} onChange={this.handleTodoAssigneeChange}>
          <option value=''>Assign to...</option>
          {this.props.teamMemberArray.map((member: TeamMember) => 
            <option key={member.dateAdded} value={member.name}> {member.name} </option>
          )}
        </select>
        <button disabled={!this.state.todoAssignee || !this.state.todo} onClick={this.handleOnClick}> Add it to the list </button>
      </FormHolder>
    );
  }

};
