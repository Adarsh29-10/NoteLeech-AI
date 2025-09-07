import React from 'react';
import NavBar from './Components/Header/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';
import LandingPageLayout from './Layouts/LandingPageLayout/LandingPageLayout';
import { RouterProvider, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>

      <Routes>
        <Route element={<LandingPageLayout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>
      </Routes>
      
    </>
  );
};

export default App;