// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage'; // 로그인 페이지 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* 다른 페이지들 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
