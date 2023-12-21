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
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';

interface FormDataObject {
  [key: string]: string | File; // Allow string or File types
}

export const AuthenticationScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
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
  const { toggleMetaDataLogin, toggleMetaDataSignUp, switchMetadataHandlerLogin } = useMetaData()

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

  const switchAlertStateLoginBadCredentials = () => {
    if (isLogin && !switchMetadataHandlerLogin) {
      toggleMetaDataLogin()
    }
  }

  const onNewUserSignUp = () => {
    setIsLogin(!isLogin)
    if (isLogin && switchMetadataHandlerLogin) {
      toggleMetaDataLogin()
    }
  }

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
        console.error('Login failed:', error);
        switchAlertStateLoginBadCredentials()
      }
    } else {
      // Handle sign-up logic if needed
      try {
        await onSignUp(user);
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

  const onSetEmailFunction = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };
  const onSetIsLoginFunction = (isLoginParam: boolean) => {
    setIsLogin(isLoginParam);
  };
  const onSetPasswordFunction = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };


  return (
    <LoginForm
      email={email}
      isLogin={isLogin}
      password={password}
      emailHandler={emailHandler}
      lastNameHandler={lastNameHandler}
      nameHandler={nameHandler}
      onSetEmailFunction={onSetEmailFunction}
      onSetIsLoginFunction={onSetIsLoginFunction}
      onSetPasswordFunction={onSetPasswordFunction}
      onNewUserSignUp={onNewUserSignUp}
      handleSubmit={handleSubmit}
      user={user} />
  );
};
