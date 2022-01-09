import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Container, AddHabit, Title } from "./style";
import ImageContext from "../../contexts/ImageContext";
import NewHabit from "../NewHabit";

function HabitsPage({ token }) {
     const [name, setName] = useState('');
     const [days, setDays] = useState('');
     const [habits, setHabits] = useState('');
     const [newHabit, setNewHabit] = useState(false);
     const { image } = useContext(ImageContext);

     useEffect(() => {
          const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
               headers: {
                    Authorization: `Bearer ${token}`
               }
          });

          promise.then(response => setHabits(response.data));
          promise.catch(error => console.log(error.response));
     }, []);

     return (
          <Container>
               <Header image={image} />
               <Title>
                    <h1>Meus hábitos</h1>
                    <AddHabit onClick={() => setNewHabit(!newHabit)}>+</AddHabit>
               </Title>
               {newHabit && <NewHabit />}
               <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
               <Footer />
          </Container>
     );
}

export default HabitsPage;