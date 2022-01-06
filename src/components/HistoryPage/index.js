import Header from "../Header";
import Footer from "../Footer";
import { Container, Title } from "./style";

function HistoryPage() {
     return (
          <Container>
               <Header />
               <Title>
                    <h1>Histórico</h1>
               </Title>
               <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
               <Footer />
          </Container>
     );
}

export default HistoryPage;