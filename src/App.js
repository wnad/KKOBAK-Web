// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';

import TermsPage from './pages/Policy/TermsPage';
import PrivacyPage from './pages/Policy/PrivacyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />


        {/* 다른 페이지들 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
