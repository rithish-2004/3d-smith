import React from 'react';
import { Route, Routes } from 'react-router-dom'; // No need to import BrowserRouter here
import './App.css';
import LandingPage from './Pages/Landingpage';
import Loginpage from './Pages/LoginPage';
import Registerpage from './Pages/Registerpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Registerpage />} />
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/loginvia" element={<Registerpage />} />
      <Route path="/registervia" element={<Loginpage/>}/>
    </Routes>
  );
}

export default App;
