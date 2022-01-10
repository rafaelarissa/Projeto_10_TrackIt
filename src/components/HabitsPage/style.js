import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #F2F2F2;
  column-gap: 28px;
  padding-top: 98px;

  span{
    color: #666666;
    font-size: 18px;
    padding: 17px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 17px 0 17px;

  h1{
    color: #126BA5;
    font-size: 23px;
  }
`;

const AddHabit = styled.button`
  background-color: #52B6FF;
  width: 40px;
  height: 35px;
  border-radius: 5px;
  border: none;
  font-size: 27px;
  color: #FFFFFF;
  cursor: pointer;
 `;

const Habits = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 20px;
  gap: 10px;
 `;

const Habit = styled.div`
  display: flex;
  flex-direction: column;
  height: 91px;
  margin-left: 18px;
  margin-right: 17px;
  background-color: #FFFFFF;
  border-radius: 5px;

    span{
      display: flex;
      justify-content: space-between;
      font-size: 19.976px;
       
    }
 `;

export {
  Container,
  Title,
  AddHabit,
  Habits,
  Habit
}