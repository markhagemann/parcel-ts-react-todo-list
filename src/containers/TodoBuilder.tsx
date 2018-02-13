import * as React from 'react';
import { TodoForm } from '../components/Todo/TodoForm';
import styled from 'styled-components';
import { TodoList } from '../components/Todo/TodoList';

export interface TodoBuilderProps {

}

export interface TodoBuilderState {
  todoItems: TodoItem[];
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
    filterComplete: false,
    filterIncomplete: false
  };

  handleTodoAdd = (name: string) : void => {
    const newTodo: TodoItem = {
      date: new Date().getTime(),
      name,
      completed: false
    }
    this.setState((prevState) => ({
      todoItems: [...prevState.todoItems, newTodo]
    }));
  }

  handleTodoRemove = (date: number) => {
    this.setState(prevState => ({ todoItems: prevState.todoItems.filter(todoItem => todoItem.date !== date) }));
  }

  handleTodoComplete = (index: number) => {
    this.setState( (prevState) => {
      const newTodoItems = prevState.todoItems;
      newTodoItems[index].completed = !prevState.todoItems[index].completed; 

      return {todoItems: newTodoItems}
    });
  }

  handleFilterComplete = () => {
    this.setState( (prevState) => {
      const updatefilterComplete = !prevState.filterComplete;
        return {filterComplete: updatefilterComplete,
      }
    });
  }

  handleFilterIncomplete = () => {
    this.setState( (prevState) => {
      const updateFilterIncomplete = !prevState.filterIncomplete;
       return {filterIncomplete: updateFilterIncomplete,
      }
    });
  } 

  render() {
    
    if (this.state.filterComplete) {
      let filteredTodoItems: TodoItem[] = [...this.state.todoItems].filter( (todoItem) => {
        if(todoItem.completed) {
          return true;
        }
      });
    } else if (this.state.filterIncomplete) {
      let filteredTodoItems: TodoItem[] = [...this.state.todoItems].filter( (todoItem) => {
        if(!todoItem.completed) {
          return true;
        }
      });
    } else {
      let filteredTodoItems: TodoItem[] = this.state.todoItems;
    }

    return (
      <FormWrapper>
        <FormContainer>
          <TodoForm onCreate={this.handleTodoAdd} />
          <TodoList filterComplete={this.handleFilterComplete} 
                    filterIncomplete={this.handleFilterIncomplete} 
                    todoComplete={this.handleTodoComplete} 
                    todoRemove={this.handleTodoRemove} 
                    todoArray={filteredTodoItems} /> 
        </FormContainer>   
      </FormWrapper> 
    );
  }
}
