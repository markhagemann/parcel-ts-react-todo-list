import * as React from 'React';
import { TeamMember } from '../../containers/TeamManager';
import { TodoItem } from '../../containers/TodoBuilder';


interface TeamMemberSelectorProps {
    members: TeamMember[]
    initialMemberName: string
    initialMemberChange?: (event: React.FormEvent<HTMLSelectElement>) => void
    onMemberChange?: (todo: TodoItem, member: string) => void
    todo?: TodoItem
}

const getEventValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    return event.target.value;
}

export const TeamMemberSelector: React.StatelessComponent<TeamMemberSelectorProps> = (props) => {
    return <select value={props.initialMemberName} onChange={props.initialMemberChange ? props.initialMemberChange : (member) => props.onMemberChange(props.todo, getEventValue(member))}>
        <option value=''>Assign to...</option>
        {props.members.map((member: TeamMember) =>
            <option key={member.dateAdded} value={member.name}> {member.name} </option>
        )}
    </select>
}