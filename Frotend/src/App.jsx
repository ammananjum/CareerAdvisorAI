// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './HomePage';
import Register from './register';
import Login from './Login';
import Features from './Features';
import About from './About';
import Profile from './Profile';
import ProfileForm from './ProfileForm';
import Contact from './contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/profile-form" element={<Layout><ProfileForm /></Layout>} />
        <Route path="/edit-profile" element={<ProfileForm userId={1} />} />


      </Routes>
    </Router>
  );
}

export default App;
