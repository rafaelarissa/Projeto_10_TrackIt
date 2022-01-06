import { Footer, Nav, Div } from "./style";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FooterBox() {
     const percentage = 50;
     return (
          <Footer>
               <Nav>Hábitos</Nav>
               <Div>
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
               </Div>
               <Nav>Histórico</Nav>
          </Footer>
     )
}

export default FooterBox;