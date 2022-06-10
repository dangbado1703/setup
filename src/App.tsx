import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  }, [authenticated]);
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
      <Routes>{PUBLIC_ROUTES.map((a) => (a.component ? <Route key={a.path} path={a.path} element={<a.component />} /> : null))}</Routes>
    </div>
  );
}

export default App;
