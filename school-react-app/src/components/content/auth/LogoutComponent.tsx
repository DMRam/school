import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LogoutComponent = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Make a request to the logout endpoint on the server
      await axios.post('http://localhost:8081/api/auth/logout');

      // Clear any client-side session data or tokens
      // (Note: Implement this based on your client-side authentication setup)
      
      // Redirect to the login page or another route after logout
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
