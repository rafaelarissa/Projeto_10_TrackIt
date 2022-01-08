import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.div`
     width: 100%;
     height: 70px;
     background-color: #FFFFFF;
     position: fixed;
     bottom: 0;
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 22px 31px 26px 36px;

     `;
const Nav = styled.nav`
     color: #52B6FF;
     font-size: 18px;
     cursor: pointer;
`;

const Div = styled.div`
     width: 91px;
     height: 91px;
     margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
     text-decoration: none;
     color: inherit;
`;

export {
     Footer,
     Nav,
     Div,
     StyledLink
}