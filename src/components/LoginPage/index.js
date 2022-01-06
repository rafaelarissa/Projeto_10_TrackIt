// import axios from 'axios';
import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo.png';

import { Container, StyledLink } from './style';

function LoginPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     return (
          <Container>
               <img src={Logo} alt="Logo Principal" />
               <form>
                    <Input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit">Entrar</Button>
               </form>
               <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
          </Container>
     );
}

export default LoginPage;