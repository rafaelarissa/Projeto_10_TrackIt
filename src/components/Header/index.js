import { Header } from "./style";
import LogoHeader from '../LogoHeader.png';

function HeaderBox() {
     return (
          <Header>
               <img src={LogoHeader} alt="Logo Topo" />
          </Header>
     )
}

export default HeaderBox;