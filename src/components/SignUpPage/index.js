import axios from 'axios';
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

     function handleSignUp(e) {
          e.preventDefault();

          const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, {
               email,
               password,
               name,
               image
          });
          promise.then(response => console.log(response));
          promise.catch(error => console.log(error.response));
     }

     return (
          <Container>
               <img src={Logo} alt="Logo Principal" />
               <form onSubmit={handleSignUp}>
                    <Input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
                    <Input type="name" value={name} placeholder="nome" onChange={(e) => setName(e.target.value)} />
                    <Input type="text" value={image} placeholder="foto" onChange={(e) => setImage(e.target.value)} />
                    <Button type="submit">Cadastrar</Button>
               </form>
               <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
          </Container>
     );
}

export default SignUpPage;