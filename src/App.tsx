// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './domains/user/pages/Login';
import Privacy from './domains/policy/pages/Privacy';
import Terms from './domains/policy/pages/Terms';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/policies/terms" element={<Terms />} />
        <Route path="/policies/privacy" element={<Privacy />} />
        {/* 다른 경로들을 여기에 추가할 수 있습니다 */}
      </Routes>
    </Router>
  );
}

export default App;
