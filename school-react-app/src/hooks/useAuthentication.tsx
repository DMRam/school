import { useState } from 'react';
import api from '../services/APIAxios';

export const useAuthentication = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (userData: any) => {
    try {
      const response = await api.post('/auth/signin', userData);
      // Handle response after login
      if (response.data && response.data.message) {
        console.log(response.data.message);
        // Send user data to context or state management if needed
      }
    } catch (error) {
      console.error('An error occurred during login.');
    }
  };

  const handleSignUp = async (userData: any) => {
    try {
      const response = await api.post('/auth/signup', userData);
      // Handle response after signup
      if (response.data && response.data.message) {
        console.log(response.data.message);
        // Send user data to context or state management if needed
      }
    } catch (error) {
      console.error('An error occurred during sign up.');
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
  };
};
