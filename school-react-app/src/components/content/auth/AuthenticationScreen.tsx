import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth_form_styles.css'; // Custom CSS file for styling (create this file)
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

interface FormDataObject {
  [key: string]: string | File; // Allow string or File types
}

export const AuthenticationScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const userData: FormDataObject = isLogin
      ? { username, password }
      : { username, email, password };
    console.log(userData); // Log the entire userData object
    console.log(JSON.stringify(userData)); // Log the stringified version of userData

    try {
      let response;
      if (isLogin) {
        response = await axios.post('http://localhost:8081/api/auth/signin', userData);
      } else {
        response = await axios.post('http://localhost:8081/api/auth/signup', userData);
      }

      if (response.data && response.data.message) {
        console.log(response.data.message);
      }

      navigate('/dashboard');
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        console.error(error.response.data.message);
      } else {
        console.error('An error occurred during form submission.');
      }
    }
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

          {/* {!isLogin && (
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
          )} */}

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

