import Header from "../Header";
import Footer from "../Footer";
import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { Container, Title, HabitBox, Habits, Checkmark } from "./style";
import axios from "axios";
import { useEffect, useState } from "react";

function TodayPage({ token }) {
     let weekday = dayjs().locale('pt-br').format('dddd');
     let day = dayjs().format('DD/MM');

     const [habits, setHabits] = useState('');


     useEffect(() => {
          const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => setHabits(response.data));
          promise.catch(error => console.log(error.response));
     }, []);

     return (
          <Container>
               <Header />
               <Title>
                    <h1>{weekday}, {day}</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
               </Title>
               <Habits>
                    <HabitBox>
                         <div>
                              <h1>Ler 1 capítulo de livro</h1>
                              <h2>Sequência atual: 3 dias</h2>
                              <h2>Seu recorde: 5 dias</h2>
                         </div>
                         <Checkmark><ion-icon name="checkmark-sharp"></ion-icon></Checkmark>
                    </HabitBox>
                    <HabitBox>
                         <div>
                              <h1>Ler 1 capítulo de livro</h1>
                              <h2>Sequência atual: 3 dias</h2>
                              <h2>Seu recorde: 5 dias</h2>
                         </div>
                         <Checkmark><ion-icon name="checkmark-sharp"></ion-icon></Checkmark>
                    </HabitBox>
                    <HabitBox>
                         <div>
                              <h1>Ler 1 capítulo de livro</h1>
                              <h2>Sequência atual: 3 dias</h2>
                              <h2>Seu recorde: 5 dias</h2>
                         </div>
                         <Checkmark><ion-icon name="checkmark-sharp"></ion-icon></Checkmark>
                    </HabitBox>
               </Habits>
               <Footer />
          </Container>
     );
}

export default TodayPage;