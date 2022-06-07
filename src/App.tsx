import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './page/home/Home';
import Login from './page/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
