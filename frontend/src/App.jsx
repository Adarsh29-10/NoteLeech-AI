import React from 'react';
import NavBar from './Components/Header/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';
import LandingPageLayout from './Layouts/LandingPageLayout/LandingPageLayout';
import { RouterProvider, Routes, Route } from 'react-router-dom';
import ChatWithPDF from './Components/ChatWithPDF/ChatWithPDF';
import Dashboard from './Components/Dashboard/Dashboard';

const App = () => {
  return (
    <>

      <Routes>
        <Route element={<LandingPageLayout />}>
          <Route path='/' element={<LandingPage />} />
        </Route>

        <Route path='/chat-with-pdf' element={<ChatWithPDF />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;