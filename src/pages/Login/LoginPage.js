// src/pages/LoginPage.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import { jwtDecode } from 'jwt-decode';
import './LoginPage.css';

function LoginPage() {
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
      <div className="login-page">
        <h2>로그인</h2>
        <p>나만의 운동을 기록하고 관리해보세요!</p>


        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}>

          {/* Google 로그인 버튼 */}
          <GoogleLogin 
            onSuccess={handleGoogleLogin} 
            onError={() => console.log('Google 로그인 실패')}
          />
        </GoogleOAuthProvider>


      </div>
  );
}

export default LoginPage;
