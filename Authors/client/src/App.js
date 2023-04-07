import './App.css';
import React from 'react';
import Main from './views/Main';
import CreatePage from './views/CreatePage';
import { Routes, Route } from 'react-router-dom';
import Update from './views/Update';

function App() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
