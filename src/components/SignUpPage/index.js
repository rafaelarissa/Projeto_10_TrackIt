// import axios from 'axios';
import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo.png';

import { Container, StyledLink } from './style';


function SignUpPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [name, setName] = useState('');
     const [image, setImage] = useState('');

     return (
          <Container>
               <img src={Logo} alt="Logo Principal" />
               <form>
                    <Input type="email" value="email" placeholder="email" />
                    <Input type="password" value="password" placeholder="senha" />
                    <Input type="name" value="name" placeholder="nome" />
                    <Input type="image" value="image" placeholder="foto" />
                    <Button type="submit">Cadastrar</Button>
               </form>
               <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
          </Container>
     );
}

export default SignUpPage;