import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { useAppSelector } from './redux/hooks';
import configRoutes from './routes/routes';

function App() {
  const isAuthenticated = useAppSelector((state) => state.loginReducer.isAuthenticated);
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <Routes>
        
      </Routes>
    </div>
  );
}

export default App;
