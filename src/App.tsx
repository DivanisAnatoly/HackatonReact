import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages/main';
import { ResumePage } from './pages/resume';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage/>} />
      </Routes>
    </div>
  );
}

export default App;
