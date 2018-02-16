import * as React from 'React';
import { TeamMember } from '../../containers/TeamManager';
import { TodoItem } from '../../containers/TodoBuilder';


interface Props {
    members: TeamMember[]
    initialMember: TeamMember
    onMemberChange: (todo: TodoItem, member: string) => void
    todo: TodoItem
}

const getEventValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    return event.target.value;
}

const TeamMemberSelector: React.StatelessComponent<Props> = (props) => {
    return <select value={props.initialMember.name} onChange={(member) => props.onMemberChange(props.todo, getEventValue(member))}>
        <option value=''>Assign to...</option>
        {props.members.map((member: TeamMember) =>
            <option key={member.dateAdded} value={member.name}> {member.name} </option>
        )}
    </select>
}