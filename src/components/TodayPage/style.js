import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #F2F2F2;
  padding-top: 98px;
`;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 17px 0 17px;
  gap: 5px;

  h1{
    color: #126BA5;
    font-size: 23px;
  }  

  h2{
     color: #BABABA;
     font-size: 18px;
  }
`;

const HabitBox = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     height: 94px;
     padding: 0 17px 0 18px;
     background-color: #ffffff;

     h1{
          font-size: 19.976px;
          color: #666666;
          margin-bottom: 7px;
     }
     h2{
          font-size: 12.976px;
          color: #666666;
          margin-bottom: 4px;
     }
`;

const Habits = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     margin-top: 11px;
     padding: 18px;
     padding-right: 17px;
     gap: 10px;
     border-radius: 5px;
`;

const Checkmark = styled.div`
     width: 69px;
     height: 69px;
     padding: 10px 10px 10px 10px;
     background-color: ${props => props.isDone ? '#8FC549' : '#EBEBEB'};
     border: 1px solid #E7E7E7;
     border-radius: 5px;
     cursor: pointer;

     ion-icon{
          font-size: 45px;
          --ionicon-stroke-width: 70px;
          color: #FFFFFF;
          
     }
`;
export {
     Container,
     Title,
     HabitBox,
     Habits,
     Checkmark
}
