import Header from "../Header";
import Footer from "../Footer";
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { Container, Title, HabitBox, Habits, Checkmark } from "./style";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";

function TodayPage() {
     let weekday = dayjs().locale('pt-br').format('dddd');
     let day = dayjs().format('DD/MM');

     const [habits, setHabits] = useState([]);
     const { image } = useContext(UserContext);
     const { token } = useContext(TokenContext);
     const { progress, setProgress } = useContext(UserContext);
     let accomplished = 0

     function handleTodayHabit() {
          const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => {
               setHabits(response.data);
               response.data.map(habits => {
                    if (habits.done) accomplished++;

               })
               setProgress((accomplished / habits.length) * 100)

          });

          promise.catch(error => console.log(error.response));
     }

     useEffect(() => {
          handleTodayHabit()
     }, []);

     function handleHabitDone(done, IdHabit) {
          const statusHabit = done ? 'uncheck' : 'check';

          const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${IdHabit}/${statusHabit}`, {}, {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => {
               handleTodayHabit()
          });
          promise.catch(error => console.log(error.response));
     }

     return (
          <Container>
               <Header image={image} />
               <Title progress={progress}>
                    <h1>{weekday}, {day}</h1>
                    <h2>{progress === 0 ? 'Nenhum hábito concluído ainda' :
                         `${Math.round(progress)}% dos hábitos concluídos`
                    }</h2>
               </Title>
               <Habits>
                    {
                         habits.map((habit) => (
                              <HabitBox record={habit.highestSequence} currentSequence={habit.currentSequence} isDone={habit.done}>
                                   <div>
                                        <h1>{habit.name}</h1>
                                        <h2>Sequência atual: <span classeName="current-sequence">{habit.currentSequence}</span> dias</h2>
                                        <h2>Seu recorde: <span className="record">{habit.highestSequence} dias</span></h2>
                                   </div>

                                   <Checkmark
                                        isDone={habit.done}
                                        onClick={() => {
                                             handleHabitDone(habit.done, habit.id)
                                        }}>
                                        <ion-icon name="checkmark-outline"></ion-icon>
                                   </Checkmark>
                              </HabitBox>
                         ))
                    }
               </Habits>
               <Footer />
          </Container >
     );
}

export default TodayPage;