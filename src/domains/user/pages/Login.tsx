import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SocialLoginButton from '../components/SocialLoginButton';
import { useAuth } from '../hooks/useAuth';
import '../../../styles/global.css';

declare global {
  interface Window {
    _env_: {
      KKOBAK_REACT_APP_GOOGLE_AUTH_CLIENT_ID: string;
    };
  }
}

function LoginContent() {
  const googleClientId = window._env_.KKOBAK_REACT_APP_GOOGLE_AUTH_CLIENT_ID;
  const { googleLogin } = useAuth();

  return (
    <div className="user-login-overlay-bg">
      <div className="user-overlay-container">
        <h1 className="user-logo-title">꼬박</h1>
        <div className="user-login-card">
          <h2 className="user-page-title">로그인</h2>
          <p className="user-page-subtitle">운동 기록, 성장의 시작</p>
          <div className="user-btn-wrapper">
            <SocialLoginButton googleLogin={googleLogin} />
          </div>
          <div className="user-link-wrapper">
            <a href="/policies/terms">이용약관</a>
            <span> | </span>
            <a href="/policies/privacy">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  const googleClientId = window._env_.KKOBAK_REACT_APP_GOOGLE_AUTH_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <LoginContent />
    </GoogleOAuthProvider>
  );
} 