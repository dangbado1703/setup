import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import NotFound from './component/NotFound';
import getToken from './config/constants/getToken';
// import Home from './page/home/Home';
import PRIVATE_ROUTES from './routes/PRIVATE_ROUTES';
import PUBLIC_ROUTES from './routes/PUBLIC_ROUTES';
import path from './routes/routes';

function App() {
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {
    if (!token) {
      navigate(path.LOGIN);
    }
  }, []);
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
      <Routes>
        {token ? (
          <>
            {PRIVATE_ROUTES.map((a) => (
              <Route key={a.path} path={a.path} element={<a.component />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          PUBLIC_ROUTES.map((a) => <Route key={a.path} path={a.path} element={<a.component />} />)
        )}
      </Routes>
    </div>
  );
}

export default App;
