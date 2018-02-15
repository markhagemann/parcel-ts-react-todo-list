import * as React from 'react';
import styled from 'styled-components';

import { TeamForm } from '../components/Team/TeamForm';
import { TeamList } from '../components/Team/TeamList';
import { FormWrapper } from '../common/styled-components';
import { FormContainer } from '../common/styled-components';

export interface TeamManagerProps {

}

export interface TeamManagerState {
  teamMembers: TeamMember[]
}

export interface TeamMember {
  dateAdded: number
  name: string
}

export class TeamManager extends React.Component<TeamManagerProps, TeamManagerState> {

  state = {
    teamMembers: [  
      {"dateAdded": 15151533, "name": 'Billy'},
      {"dateAdded": 15241863, "name": 'Dan'},
      {"dateAdded": 15223433, "name": 'Kira'},
    ]
  };

  handleMemberAdd = (name: string) : void => {
    if(name != "") {
      const newMember: TeamMember = {
        dateAdded: new Date().getTime(),
        name
      }
      this.setState((prevState) => ({
        teamMembers: [...prevState.teamMembers, newMember]
      }));
    }
   
  }

  handleTodoRemove = (dateAdded: number) => {
    this.setState(prevState => ({ teamMembers: prevState.teamMembers.filter(member => member.dateAdded !== dateAdded) }));
  }

  render() {

    return (
      <FormWrapper>
        <FormContainer>
          <TeamForm onCreate={this.handleMemberAdd} />
          <TeamList todoRemove={this.handleTodoRemove} 
                    teamArray={this.state.teamMembers} /> 
        </FormContainer>   
    </FormWrapper> 
    );
  }
}
