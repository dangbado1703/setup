import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import NotFound from './component/NotFound';
import { clearIconAbout, setCheckClick } from './component/Profile/Info/About/about.reducer';
import getToken from './config/constants/getToken';
import { useAppDispatch, useAppSelector } from './redux/hooks';
// import Home from './page/home/Home';
import PRIVATE_ROUTES from './routes/PRIVATE_ROUTES';
import PUBLIC_ROUTES from './routes/PUBLIC_ROUTES';
import path from './routes/routes';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const checkClick = useAppSelector((state) => state.aboutReducer.checkClick);
  const token = getToken();
  useEffect(() => {
    if (!token) {
      navigate(path.LOGIN);
    }
  }, []);
  const handleHide = () => {
    if (checkClick === 2) {
      dispatch(setCheckClick(1));
    }
    dispatch(clearIconAbout());
  };

  return (
    <div onClick={handleHide} role="presentation" className="App">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
      <Routes>
        {token ? (
          <>
            {PRIVATE_ROUTES.map((a) => (
              <Route
                key={a.path}
                path={a.path}
                element={
                  <a.layout>
                    <a.component />
                  </a.layout>
                }>
                {a?.children?.map((b) => (
                  <Route key={b.path} path={b.path} element={<b.component />}>
                    {b?.childrenInfo?.map((c) => (
                      <Route key={c.path} path={c.path} element={<c.component />} />
                    ))}
                  </Route>
                ))}
              </Route>
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
