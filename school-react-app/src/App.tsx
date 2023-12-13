import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthenticationScreen } from './components/content/auth/AuthenticationScreen';
import { DashboardComp } from './components/content/dashboard/DashboardComp';
import { FooterComp } from './components/footer/FooterComp';
import { HeaderComp } from './components/header/HeaderComp';
import './App.css'; // Import your CSS file for styling

export const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="app-container">
          <HeaderComp />
          <div className="content">

            <Routes>
              <Route path='/' element={<AuthenticationScreen />} />
              <Route path='/auth' element={<AuthenticationScreen />} />
              <Route path='/dashboard' element={<DashboardComp />} />
            </Routes>

          </div>
          <FooterComp />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};
