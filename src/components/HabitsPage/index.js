import axios from 'axios';
import Header from "../Header";
import Footer from "../Footer";
import NewHabit from "../NewHabit";
import { useState, useEffect, useContext } from 'react';
import { Container, AddHabit, Title, Habit, Habits } from "./style";
import ImageContext from "../../contexts/ImageContext";
import TokenContext from "../../contexts/TokenContext";


function HabitsPage() {
     const [habits, setHabits] = useState(null);
     const [newHabit, setNewHabit] = useState(false);
     const { image } = useContext(ImageContext);
     const { token } = useContext(TokenContext);
     const weekdays = ['D', 'S', "T", 'Q', 'Q', 'S', 'S'];

     useEffect(() => {
          const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => setHabits(response.data));
          promise.catch(error => console.log(error.response));
     }, []);

     function handleDeleteHabit() {

     }

     return (
          <Container>
               <Header image={image} />
               <Title>
                    <h1>Meus hábitos</h1>
                    <AddHabit onClick={() => setNewHabit(!newHabit)}>+</AddHabit>
               </Title>
               {newHabit && <NewHabit habits={habits} setNewHabit={setNewHabit} weekdays={weekdays} />}
               {habits === null ? <span>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
               </span> :
                    <Habits>
                         {
                              habits.map((habit) => (
                                   <Habit>
                                        <span>{habit.name} <ion-icon name="trash-outline" onClick={handleDeleteHabit}></ion-icon></span>
                                        <div>{habit.days}</div>

                                   </Habit>
                              ))
                         }
                    </Habits>
               }
               <Footer />
          </Container>
     );
}

export default HabitsPage;