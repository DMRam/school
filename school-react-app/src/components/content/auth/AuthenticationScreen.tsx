import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth_form_styles.css'; // Custom CSS file for styling (create this file)
import { useNavigate } from 'react-router-dom';
import { useData } from '../../../hooks/useData';
import { loginUser, onSignUp } from '../../../api/auth/authApiServices';
import { fetchUserByEmail } from '../../../api/users/usersApiServices';
import { useHandleData } from '../../../hooks/useHandleData';
import { UserInterface } from '../../../interfaces/UserInterface';

interface FormDataObject {
  [key: string]: string | File; // Allow string or File types
}

export const AuthenticationScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toggleGearIcon } = useData()
  const { sendLoggedUser } = useHandleData()
  const [user, setUser] = useState<UserInterface>({
    id: "",
    name: "",
    lastName: '',
    email: "",
    password
  })

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

    console.log(event + " EVENT")
    console.log(event.target + " EVENT.TARGET")
    console.log(event.target.value + " EVENT.TARGET.VALUE")
    setUser((prevUser) => ({
      ...prevUser,
      name: event.target.value,

    }));
  }
  const lastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      lastName: event.target.value,
    }));
  }
  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: event.target.value,
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creating only password to add in newUser created
    user.password = password

    // Creating credentials 
    const credentials = {
      email,
      password,
    };


    if (isLogin) {
      try {
        await loginUser(credentials).then((res) => {
          console.log(res + " Cool!!! Logged in")
          toggleGearIcon()
          getUserLoggedByEmail(credentials.email)
          navigate('/dashboard');
        })

      } catch (error) {
        console.error('Login failed:', error);
        // Handle login failure
      }
    } else {
      // Handle sign-up logic if needed
      onSignUp(user)
      console.log(JSON.stringify(user) + " USER TO REGISTERED!!!!");
      navigate('/login')

    }
  };

  const getUserLoggedByEmail = (email: string) => {
    fetchUserByEmail(email).then((res: UserInterface) => {
      const currentUserLogged = res
      sendLoggedUser(currentUserLogged)
    })
  }


  return (
    <Container>
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <Form onSubmit={handleSubmit}>
          {isLogin && <Form.Group controlId="formBasicUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>}
          {!isLogin && (
            <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="email"
                  type="string"
                  placeholder="Enter email"
                  value={user.name}
                  onChange={nameHandler}
                />
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  name="email"
                  type="string"
                  placeholder="Enter email"
                  value={user.lastName}
                  onChange={lastNameHandler}
                />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={emailHandler}
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
