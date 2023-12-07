// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';  // Update the import to match the actual filename
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import Navigation from './components/Navigation';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/pages/home" />}
          />
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/resume" element={<Resume />} />
          <Route path="/pages/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
