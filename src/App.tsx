import * as React from "react";
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import TodoBuilder from './containers/TodoBuilder';


injectGlobal`
  body {
    color: #222;
    margin: 0;
    font-size: 15px;
    height: 100%;
    width: 100%;
  }
`

const PageHeader = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  background: #3b4f98;
  color: #FFF;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  h1 {
    margin: 0 15px;
  }

`;

export class App extends React.Component<any, any> {
  render() {
    return (
      <>
      <PageHeader>
        <h1> React to-do list</h1>
      </PageHeader>
      <TodoBuilder />
      </>

    );
  }
}