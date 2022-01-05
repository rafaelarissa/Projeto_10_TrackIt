// import axios from 'axios';
import React, { useState } from 'react';
// import BigLogo from '../BigLogo';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo.png';

import { Container, StyledLink } from './style';

function LoginPage() {
     return (
          <Container>
               <img src={Logo} alt="Logo Principal" />
               <form>
                    <Input type="email" value="email" placeholder="email" />
                    <Input type="password" value="password" placeholder="senha" />
                    <Button type="submit">Entrar</Button>
               </form>
               <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
          </Container>
     );
}

export default LoginPage;