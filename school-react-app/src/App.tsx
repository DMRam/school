import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthenticationScreen } from './components/content/auth/AuthenticationScreen';
import { FooterComp } from './components/footer/FooterComp';
import { HeaderComp } from './components/header/HeaderComp';
import './App.css'; // Import your CSS file for styling
import store from './store/index';
import { Provider } from 'react-redux';
import { ProtectedRoute } from './components/content/auth/routes/ProtectedRoute';

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <div className="app-container">
            <HeaderComp />
            <div className="content">
              <Routes>
                <Route path='/' element={<AuthenticationScreen />} />
                <Route path='/login' element={<AuthenticationScreen />} />
                <Route path="/dashboard" element={<ProtectedRoute />} />
              </Routes>
            </div>
            <FooterComp />
          </div>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
