import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button';
import Input from '../Input';
import Logo from '../Logo.png';
import Loader from "react-loader-spinner";

import { Container, StyledLink } from './style';

function LoginPage({ setToken }) {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();

     function handleLogin(e) {
          e.preventDefault();

          const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, {
               email,
               password,
          });

          setIsLoading(true);

          promise.then(response => {
               setToken(response.data.token)
               setIsLoading(false);
               navigate('/hoje')
          });

          promise.catch(error => {
               console.log(error.response)
               setIsLoading(false);
          });
     }

     return (
          <Container>
               <img src={Logo} alt="Logo Principal" />
               <form onSubmit={handleLogin}>
                    <Input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} disabled={isLoading} />
                    <Input type="password" value={password} placeholder="senha" onChange={(e) => setPassword(e.target.value)} disabled={isLoading} />
                    <Button type="submit" disabled={isLoading}>
                         {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} /> : "Entrar"}
                    </Button>
               </form>
               <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
          </Container>
     );
}

export default LoginPage;