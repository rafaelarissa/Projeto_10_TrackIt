import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFFFFF;
`;

const StyledLink = styled(Link)`
  height: 40px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`;

export {
  Container,
  StyledLink
}