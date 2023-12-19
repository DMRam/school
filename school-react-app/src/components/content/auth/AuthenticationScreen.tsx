import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth_form_styles.css'; // Custom CSS file for styling (create this file)
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { useData } from '../../../hooks/useData';
import { useHandleData } from '../../../hooks/handleData';
import { UserInterface } from '../../../interfaces/UserInterface';
import api from '../../../services/APIAxios';
import { useAuthentication } from '../../../hooks/useAuthentication';

interface FormDataObject {
  [key: string]: string | File; // Allow string or File types
}

export const AuthenticationScreen = () => {
  const { toggleGearIcon } = useData();
  const { sendLoggedUser } = useHandleData();
  const navigate = useNavigate();

  const {
    username,
    email,
    handleLogin,
    handleSignUp,
    password,
    setUsername,
    setEmail,
    setPassword,
  } = useAuthentication();

  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isLogin) {
      await handleLogin({ username, password });
    } else {
      await handleSignUp({ username, email, password });
    }
    // Redirect logic or state change after login/signup success
    navigate('/dashboard');
    toggleGearIcon();
  };

  return (
    <Container>
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          {!isLogin && (
            <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </>
          )}

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>

          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'New user? Sign Up' : 'Already a user? Login'}
          </p>
        </Form>
      </div>
    </Container>
  );
};
