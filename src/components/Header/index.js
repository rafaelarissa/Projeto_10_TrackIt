import { Header, Avatar } from "./style";
import LogoHeader from '../LogoHeader.png';

function HeaderBox({ image }) {

     return (
          <Header>
               <img src={LogoHeader} alt="Logo Topo" />
               <Avatar src={image} />
          </Header >
     )
}

export default HeaderBox;