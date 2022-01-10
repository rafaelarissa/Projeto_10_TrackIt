import Header from "../Header";
import Footer from "../Footer";
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { Container, Title, HabitBox, Habits, Checkmark } from "./style";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ImageContext from "../../contexts/ImageContext";
import TokenContext from "../../contexts/TokenContext";

function TodayPage() {
     let weekday = dayjs().locale('pt-br').format('dddd');
     let day = dayjs().format('DD/MM');

     const [habits, setHabits] = useState([]);
     const [doneList, setDoneList] = useState([false]);
     const { image } = useContext(ImageContext);
     const { token } = useContext(TokenContext);


     useEffect(() => {
          const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => setHabits(response.data));
          promise.catch(error => console.log(error.response));
     }, []);

     function handleHabitDone(done) {
          if (doneList.includes(done)) {
               setDoneList(doneList.filter(doneList => doneList !== done));
               return;
          }

          setDoneList([...doneList, done]);
     }

     return (
          <Container>
               <Header image={image} />
               <Title>
                    <h1>{weekday}, {day}</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
               </Title>
               <Habits>
                    {
                         habits.map((habit, index) => (
                              <HabitBox>
                                   <div>
                                        <h1>{habit.name}</h1>
                                        <h2>Sequência atual: {habit.currentSequence} dias</h2>
                                        <h2>Seu recorde: {habit.highestSequence} dias</h2>
                                   </div>

                                   <Checkmark
                                        isDone={doneList.includes(index)}
                                        onClick={() => handleHabitDone(index)}>
                                        <ion-icon name="checkmark-outline"></ion-icon>
                                   </Checkmark>
                              </HabitBox>
                         ))
                    }
               </Habits>
               <Footer />
          </Container>
     );
}

export default TodayPage;