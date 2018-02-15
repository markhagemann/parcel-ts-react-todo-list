import * as React from 'react';
import styled from 'styled-components';
import { FormHolder } from '../../common/styled-components';

interface TeamFormState {
    member: string;
}

interface TeamFormProps {
  onCreate: (name: string) => void;
}

export class TeamForm extends React.Component<TeamFormProps, TeamFormState> {

  state: Readonly<TeamFormState> = {
    member: ""
  };

  handleTodoChange = (event: React.FormEvent<HTMLInputElement>) : void => {
    this.setState({member: event.currentTarget.value})
  }

  handleOnClick = () => {
    this.props.onCreate(this.state.member);
    this.setState({ member: "" });
  }

  render() {
    return (
      <FormHolder>
        <input onChange={this.handleTodoChange} value={this.state.member} type="text" placeholder="Who are you adding?" />
        <button onClick={this.handleOnClick}> Add them to the team </button>
      </FormHolder>
    );
  }

};
