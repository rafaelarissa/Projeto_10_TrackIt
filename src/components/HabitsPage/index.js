import Header from "../Header";
import Footer from "../Footer";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Container, AddHabit, Title } from "./style";
import ImageContext from "../../contexts/ImageContext";

function HabitsPage({ token }) {
     const [habits, setHabits] = useState('');
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

     console.log(image)
     return (
          <Container>
               <Header image={image} />
               <Title>
                    <h1>Meus hábitos</h1>
                    <AddHabit>+</AddHabit>
               </Title>
               <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
               <Footer />
          </Container>
     );
}

export default HabitsPage;