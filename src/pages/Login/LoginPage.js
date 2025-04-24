// src/pages/LoginPage.js
import React from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './LoginPage.css';

function LoginPageContent() {
  const googleClientId = window._env_.KKOBAK_REACT_APP_GOOGLE_AUTH_CLIENT_ID;

  // 이제 provider 안에서 호출됩니다!
  const googleLogin = useGoogleLogin({
    onSuccess: credentialResponse => {
      console.log('성공', credentialResponse);
      if (!credentialResponse.credential) return;
      const user = jwtDecode(credentialResponse.credential);
      console.log('Decoded user info:', user);
      // TODO: 백엔드로 ID 토큰 보내기...
    },
    onError: () => console.log('실패'),
  });

  return (
    <div className="login-overlay-bg">
      <div className="overlay-container">
        {/* 1) 로고 */}
        <h1 className="logo-title">꼬박</h1>

        {/* 2) 로그인 카드 */}
        <div className="login-card">
          <h2 className="page-title">로그인</h2>
          <p className="page-subtitle">운동 기록, 성장의 시작</p>

          {/* 3) 소셜 버튼 래퍼 */}
          <div className="btn-wrapper">
            <button
              className="social-btn google-btn"
              onClick={() => googleLogin()}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/240px-Google_%22G%22_logo.svg.png"
                alt="Google logo"
                className="social-icon"
              />
              <span>Google 계정으로 로그인</span>
            </button>
            {/* 카카오/네이버 버튼도 동일하게 .social-btn 으로 추가 가능 */}
          </div>

          {/* 4) 약관 링크 */}
          <div className="link-wrapper">
            <a href="/terms">이용약관</a>
            <span> | </span>
            <a href="/privacy">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const googleClientId = window._env_.KKOBAK_REACT_APP_GOOGLE_AUTH_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <LoginPageContent />
    </GoogleOAuthProvider>
  );
}
