import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import { getToken } from './model/getToken';
import { useAppSelector } from './redux/hooks';
import { path, PUBLIC_ROUTES } from './routes/routes';

function App() {
  const navigate = useNavigate();
  const token = getToken();
  const authenticated = useAppSelector((state) => state.loginReducer.isAuthenticated);
  useEffect(() => {
    if (!token) {
      navigate(path.LOGIN);
    } else {
      navigate(path.HOME);
    }
  }, []);
  return (
    <div className="App">
      <Routes>{PUBLIC_ROUTES.map((a) => (a.component ? <Route key={a.path} path={a.path} element={<a.component />} /> : null))}</Routes>
    </div>
  );
}

export default App;
