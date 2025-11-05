import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About.js';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Contoh single page application (SPA)</h1>

        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;