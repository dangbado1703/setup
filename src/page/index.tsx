import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../routes/routes';

const Index: React.FC = () => {
  return (
    <div>
      {<Routes>{PRIVATE_ROUTES.map((a) => (a.component ? <Route key={a.path} path={a.path} element={<a.component />} /> : null))}</Routes>}
    </div>
  );
};

export default Index;
