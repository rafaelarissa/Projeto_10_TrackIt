import Header from "../Header";
import Footer from "../Footer";
import { Container, Title, HabitBox, Habits, Checkmark } from "./style";

function TodayPage() {
     return (
          <Container>
               <Header />
               <Title>
                    <h1>Quinta, 06/01</h1>
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