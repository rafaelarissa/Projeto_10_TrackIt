import { Header, Avatar } from "./style";
import LogoHeader from '../LogoHeader.png';

function HeaderBox() {
     return (
          <Header>
               <img src={LogoHeader} alt="Logo Topo" />
               <Avatar />
          </Header>
     )
}

export default HeaderBox;