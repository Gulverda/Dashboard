// pages/Login.tsx

import React from "react";
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
