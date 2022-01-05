import styled from "styled-components";

const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid #D5D5D5;
  background-color: #FFFFFF;
  color: #222222;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 5px;

  ::placeholder {
    color: #DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
  }
`;

export default Input;