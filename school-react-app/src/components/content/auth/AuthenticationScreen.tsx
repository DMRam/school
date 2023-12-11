import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth_form_styles.css'; // Custom CSS file for styling (create this file)

export const AuthenticationScreen = () => {
  const [isLogin, setIsLogin] = useState(true); // To toggle between login/signup forms

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle login or signup submission here
    // You can access the form data using the state or refs
    // For demo purposes, we're not performing actual login/signup
  };

  return (
    <Container>
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {!isLogin && (
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          )}

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

