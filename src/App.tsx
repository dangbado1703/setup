import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import getToken from './config/constants/getToken';
import { useAppSelector } from './redux/hooks';
import PRIVATE_ROUTES from './routes/PRIVATE_ROUTES';
import PUBLIC_ROUTES from './routes/PUBLIC_ROUTES';
import path from './routes/routes';

function App() {
  const navigate = useNavigate();
  const token = getToken();
  const authenticated = useAppSelector((state) => state.loginReducer.isAuthenticated);
  useEffect(() => {
    if (!token) {
      navigate(path.LOGIN);
    }
  }, [authenticated]);
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
      {token && (
        <Routes>{PRIVATE_ROUTES.map((a) => (a.component ? <Route key={a.path} path={a.path} element={<a.component />} /> : null))}</Routes>
      )}
      {!token && (
        <Routes>{PUBLIC_ROUTES.map((a) => (a.component ? <Route key={a.path} path={a.path} element={<a.component />} /> : null))}</Routes>
      )}
    </div>
  );
}

export default App;
