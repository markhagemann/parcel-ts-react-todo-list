import * as React from 'react';
import { TodoForm } from '../components/Todo/TodoForm';
import styled from 'styled-components';
import { TodoList } from '../components/Todo/TodoList';
import { FormWrapper } from '../common/styled-components';
import { FormContainer } from '../common/styled-components';
import { TeamMember } from '../containers/TeamManager';

export interface TodoBuilderProps {

}

export type Filters = "all" | "complete" | "incomplete"

export interface TodoBuilderState {
  todoItems: TodoItem[]
  filter: Filters
  filterComplete: boolean
  filterIncomplete: boolean
}

export interface TodoItem {
  date: number
  name: string
  completed: boolean
  assignedTo: string
}

export class TodoBuilder extends React.Component<TodoBuilderProps, TodoBuilderState> {

  state: Readonly<TodoBuilderState> = {
    todoItems: [],
    filter: "all",
    filterComplete: false,
    filterIncomplete: false
  };

  handleTodoAdd = (name: string, assignee: string): void => {
    if (name != "" && assignee != "") {
      const newTodo: TodoItem = {
        date: new Date().getTime(),
        name,
        completed: false,
        assignedTo: assignee
      }
      console.log(assignee);
      this.setState((prevState) => ({
        todoItems: [...prevState.todoItems, newTodo]
      }));
    }

  }

  handleTodoRemove = (date: number) => {
    this.setState(prevState => ({ todoItems: prevState.todoItems.filter(todoItem => todoItem.date !== date) }));
  }

  handleTodoComplete = (todo: TodoItem) => {
    this.setState((prevState) => {
      const newTodoItems = prevState.todoItems;

      for (let i = 0; i < newTodoItems.length; i++) {
        if (newTodoItems[i].date == todo.date) {
          newTodoItems[i].completed = !newTodoItems[i].completed;
        }
      }

      return { todoItems: newTodoItems }
    });
  }

  updateFilter = (filter: Filters) => {
    this.setState({ filter });
  }

  handleNoFilters = () => {
    this.setState({ filterComplete: false, filterIncomplete: false });
  }

  handleFilterComplete = () => {
    this.setState({ filterComplete: true, filterIncomplete: false });
  }

  handleFilterIncomplete = () => {
    this.setState({ filterComplete: false, filterIncomplete: true });
  }

  onAssignedChanged = (todo: TodoItem, memberName: string) => {
    this.setState((prev) => {
      return {
        todoItems: prev.todoItems.map(x => {
          if (x.date == todo.date) x.assignedTo = memberName
          return x;
        })
      }
    })
  }


  filterTodos = (todo: TodoItem) => {
    switch (this.state.filter) {
      case "complete":
        return todo.completed
      case "incomplete":
        return !todo.completed
      default:
        return true;
    }
  }

  render() {

    const memberHack: TeamMember[] = [
      { "dateAdded": 15151533, "name": 'Billy' },
      { "dateAdded": 15241863, "name": 'Dan' },
      { "dateAdded": 15223433, "name": 'Kira' },
    ]

    return (
      <FormWrapper>
        <FormContainer>
          <TodoForm onCreate={this.handleTodoAdd}
            teamMemberArray={memberHack} />
          <TodoList onFilterChange={this.updateFilter}
            todoComplete={this.handleTodoComplete}
            todoRemove={this.handleTodoRemove}
            items={this.state.todoItems.filter(this.filterTodos)}
            teamMembers={memberHack}
            onAssignedChanged={this.onAssignedChanged} />

        </FormContainer>
      </FormWrapper>
    );
  }
}
