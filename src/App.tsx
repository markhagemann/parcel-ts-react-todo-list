import * as React from "react";
import styled from "styled-components";
import { injectGlobal } from 'styled-components';
import TodoBuilder from './containers/TodoBuilder';


injectGlobal`
  body {
    font-family: 'Titillium Web', sans-serif;
    background: #f6f6f6;
    color: #222;
    margin: 0;
    font-size: 15px;
    height: 100%;
    width: 100%;
  }
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #a5a2a2;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: #a5a2a2;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: #a5a2a2;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: #a5a2a2;
  }
`

const PageHeader = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  background: #3b4f98;
  color: #FFF;
  text-align: center;

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