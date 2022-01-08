import { Footer, Nav, Div, StyledLink } from "./style";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FooterBox() {
     const percentage = 50;
     return (
          <Footer>
               <Nav><StyledLink to="/habitos">Hábitos</StyledLink></Nav>
               <Div><StyledLink to="/hoje">
                    <CircularProgressbar
                         value={percentage}
                         text='Hoje'
                         background
                         backgroundPadding={6}
                         styles={buildStyles({
                              backgroundColor: "#3e98c7",
                              textColor: "#fff",
                              pathColor: "#fff",
                              trailColor: "transparent"
                         })}
                    />
               </StyledLink>
               </Div>
               <Nav><StyledLink to="/historico">Histórico</StyledLink></Nav>
          </Footer>
     )
}

export default FooterBox;