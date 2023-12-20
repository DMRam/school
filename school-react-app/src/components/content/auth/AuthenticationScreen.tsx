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
import { TextAlerts } from './TextAlerts';
import { useMetaData } from '../../../hooks/useMetaData';

interface FormDataObject {
  [key: string]: string | File; // Allow string or File types
}

export const AuthenticationScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isFail, setIsFail] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toggleGearIcon } = useData();
  const { sendLoggedUser } = useHandleData();
  const [user, setUser] = useState<UserInterface>({
    id: "",
    name: "",
    lastName: '',
    email: "",
    password: ""
  });
  const { toggleMetaDataLogin, toggleMetaDataSignUp } = useMetaData()

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: event.target.value,
    }));
  };

  const lastNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      lastName: event.target.value,
    }));
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: event.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Creating only password to add in newUser created
    user.password = password;

    // Creating credentials 
    const credentials = {
      email,
      password,
    };

    if (isLogin) {
      try {
        await loginUser(credentials).then((res) => {
          console.log(res + " Cool!!! Logged in");
          toggleGearIcon();
          getUserLoggedByEmail(credentials.email);
          navigate('/dashboard');
          setEmail('');
          setPassword('');
        });
      } catch (error) {
        // Logging error should trigger boolean to texts alert
        console.log(setIsFail(!isFail) + " khsdkjhsdkjhkjsdhkj")
        console.error('Login failed:', error);

        toggleMetaDataLogin()

      }
    } else {
      // Handle sign-up logic if needed
      try {
        await onSignUp(user);
        console.log(JSON.stringify(user) + " USER TO REGISTERED!!!!");
        navigate('/');
        setUser({
          id: "",
          name: "",
          lastName: '',
          email: "",
          password: ""
        });
        setPassword("");
      } catch (error) {
        toggleMetaDataSignUp()
        console.error('Signup failed:', error);
        // Pass boolean to TextAlerts

      }
    }
  };

  const getUserLoggedByEmail = (email: string) => {
    fetchUserByEmail(email).then((res: UserInterface) => {
      const currentUserLogged = res;
      sendLoggedUser(currentUserLogged);
    });
  };

  return (
    <Container>
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <Form onSubmit={handleSubmit}>
          {isLogin && (
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          )}
          {!isLogin && (
            <>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="email"
                  type="string"
                  placeholder="Enter name"
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

          {isLogin ? (
            <p onClick={() => { setIsLogin(!isLogin); toggleMetaDataLogin(); }}>
              New user? Sign Up
            </p>
          ) : (
            <p onClick={() => setIsLogin(!isLogin)}>
              Already a user? Login
            </p>
          )}
          <TextAlerts />
        </Form>
      </div>
    </Container>
  );
};
