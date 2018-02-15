import styled from 'styled-components';

export const FormWrapper = styled.div`
    margin: 15px;
`;

export const FormContainer = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    background: #fff;
    max-width: 290px;
    border: 1px solid #ddd;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const FormHolder = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  margin: 15px auto;

  input, select {
    background: #f6f6f6;
    font-family: 'Titillium Web', sans-serif;
    padding: 10px;
    font-size: 15px;
    border: 1px solid #ddd;
    margin-bottom: 5px;
  }
  button {
    font-family: 'Titillium Web', sans-serif;
    font-size: 15px;
    color: #fff;
    padding:10px;
    background: #3b4f98;
    border: 2px solid #3b4f98;
  }
  button:hover{
    cursor: pointer;
    background: #5066ba;
    border-color: #4965d1;
  }
`;