import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BreedGallery from './pages/BreedGallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breed/:breedName" element={<BreedGallery />} />
      </Routes>
    </Router>
  );
}

export default App;