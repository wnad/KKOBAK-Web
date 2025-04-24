// src/pages/LoginPage.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import { jwtDecode } from 'jwt-decode';
import './LoginPage.css';

function LoginPage() {

  // 런타임에 마운트된 config.js 에서 읽기
  const googleClientId = window._env_.KKOBAK_REACT_APP_GOOGLE_AUTH_CLIENT_ID;

  // Google 로그인 처리
  const handleGoogleLogin = (credentialResponse) => {
    if (!credentialResponse.credential) return;
    
    // 1) ID 토큰(JWT)을 디코드해서 유저 정보 꺼내기
    const user = jwtDecode(credentialResponse.credential);
    console.log('Decoded user info:', user);
    // user.email, user.name, user.picture 등이 포함되어 있음

    // 2) (선택) 백엔드에 credentialResponse.credential 보내서 검증·세션 생성
    // fetch('/api/auth/google', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ id_token: credentialResponse.credential })
    // })
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="logo-title">꼬박</h1>
        <h2 className="page-title">로그인</h2>
        <p className="page-subtitle">운동을 기록하고 성장해보세요!</p>
        
        <GoogleOAuthProvider clientId={googleClientId}>
          <div className="btn-wrapper">
            <GoogleLogin
              onSuccess={res => console.log('구글 로그인 성공', res)}
              onError={() => console.log('구글 로그인 실패')}
            />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default LoginPage;
