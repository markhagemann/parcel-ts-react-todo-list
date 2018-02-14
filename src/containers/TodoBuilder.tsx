import * as React from 'react';
import { TodoForm } from '../components/Todo/TodoForm';
import styled from 'styled-components';
import { TodoList } from '../components/Todo/TodoList';

export interface TodoBuilderProps {

}

export type Filters = "all" | "complete" | "incomplete"

export interface TodoBuilderState {
  todoItems: TodoItem[];
  filter: Filters
  filterComplete: boolean;
  filterIncomplete: boolean;
}

export interface TodoItem {
  date: number;
  name: string
  completed: boolean
}

const FormWrapper = styled.div`
    margin: 15px;
`;

const FormContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    background: #fff;
    max-width: 290px;
    border: 1px solid #ddd;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export class TodoBuilder extends React.Component<TodoBuilderProps, TodoBuilderState> {

  state: Readonly<TodoBuilderState> = {
    todoItems: [],
    filter: "all",
    filterComplete: false,
    filterIncomplete: false
  };

  handleTodoAdd = (name: string) : void => {
    if(name != "") {
      const newTodo: TodoItem = {
        date: new Date().getTime(),
        name,
        completed: false
      }
      this.setState((prevState) => ({
        todoItems: [...prevState.todoItems, newTodo]
      }));
    }
   
  }

  handleTodoRemove = (date: number) => {
    this.setState(prevState => ({ todoItems: prevState.todoItems.filter(todoItem => todoItem.date !== date) }));
  }

  handleTodoComplete = (todo: TodoItem) => {
    this.setState( (prevState) => {
      const newTodoItems = prevState.todoItems;

      for(let i = 0; i < newTodoItems.length; i++) {
        if (newTodoItems[i].date == todo.date) {
          newTodoItems[i].completed = !newTodoItems[i].completed;
        } 
      }
    
      return {todoItems: newTodoItems}
    });
  }

  updateFilter = (filter: Filters) => {
    this.setState({filter});
  }

  handleNoFilters = () => {
    this.setState({filterComplete: false, filterIncomplete: false});
  }

  handleFilterComplete = () => {
    this.setState({filterComplete: true, filterIncomplete: false});
  }

  handleFilterIncomplete = () => {
    this.setState({filterComplete: false, filterIncomplete: true});
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

    return (
      <FormWrapper>
        <FormContainer>
          <TodoForm onCreate={this.handleTodoAdd} />
          <TodoList onFilterChange={this.updateFilter}
                    todoComplete={this.handleTodoComplete} 
                    todoRemove={this.handleTodoRemove} 
                    todoShownArray={this.state.todoItems.filter(this.filterTodos)}
                    todoTotalArray={this.state.todoItems} /> 
        </FormContainer>   
      </FormWrapper> 
    );
  }
}
