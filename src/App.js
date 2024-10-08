import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import { AuthProvider } from './AuthContext'; // Import AuthProvider for context
import LandingPage from './Pages/Landingpage';
import Loginpage from './Pages/LoginPage';
import Registerpage from './Pages/Registerpage';

function App() {
  const [currentUser, setCurrentUser] = useState(null); // State to track the current user

  return (
    <AuthProvider value={{ currentUser, setCurrentUser }}>
      {/* No need for BrowserRouter here, it's already in index.js */}
      <Routes> {/* Define all your routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/loginvia" element={<Registerpage />} />
        <Route path="/registervia" element={<Loginpage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
