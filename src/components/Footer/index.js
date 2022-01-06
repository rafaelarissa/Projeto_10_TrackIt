import { Footer, Nav, Div } from "./style";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FooterBox() {
     const percentage = 50;
     return (
          <Footer>
               <Nav>Hábitos</Nav>
               <Div>
                    <CircularProgressbarWithChildren value={percentage}>
                         {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                         <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                         <div style={{ fontSize: 12, marginTop: -5 }}>
                              <strong>Hoje</strong> mate
                         </div>
                    </CircularProgressbarWithChildren>
               </Div>
               <Nav>Histórico</Nav>
          </Footer>
     )
}

export default FooterBox;