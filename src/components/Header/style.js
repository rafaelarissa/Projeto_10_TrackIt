import styled from "styled-components";

const Header = styled.header`
     position: fixed;
     top: 0;
     height: 70px;
     width: 100%;
     background-color: #126BA5;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 18px;  
`;

const Avatar = styled.img`
     border-radius: 50%;
     background-color: #0bb898;
     width: 51px;
     height: 51px;
     border: none;
     `;

export {
     Header,
     Avatar
}