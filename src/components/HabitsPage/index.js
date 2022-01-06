import Header from "../Header";
import Footer from "../Footer";
import { Container, AddHabit, Title } from "./style";

function HabitsPage() {
     return (
          <Container>
               <Header />
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