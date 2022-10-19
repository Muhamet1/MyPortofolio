
import React from 'react';
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Router>
      <Home/>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;