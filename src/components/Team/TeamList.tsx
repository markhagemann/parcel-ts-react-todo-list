import * as React from 'react';
import styled from 'styled-components';
import { TeamMember } from '../../containers/TeamManager';

interface TeamListProps {
  teamArray: TeamMember[]
  todoRemove: any
}

const List = styled.ul`
  margin: 20px auto;
  padding: 0px;
  max-width: 270px;

  li {
    display: flex;
    justify-content: space-between;
    border: 1px solid #dedede;
    list-style-type: none;
    padding: 15px;
    border: 0;
  }
  li:hover {
    background-color: #dfebfd;
    color: #005ebb;
    border-radius: 5px;
  }
  .team-member {
    justify-content: flex-start;
  }
  .remove-team-member {
    color: #cc4a00;
    justify-content: flex-end;
    margin-right: 0;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
  }
  .team-member-container {
    display: flex;
    justify-content: center;
  }
`;

export const TeamList: React.SFC<TeamListProps> = (props) => {

  return (
      <>
        <List>
            {props.teamArray.map((member: TeamMember) =>
              <li key={member.dateAdded}>
                <div className="team-member-container"> 
                  <span className="team-member">{member.name}</span>
                </div>
                <a href="#" onClick={() => props.todoRemove(member.dateAdded)} className="remove-team-member"> X </a>
              </li>
            )}
        </List>
      </>
  );
};
