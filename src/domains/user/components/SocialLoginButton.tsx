import React from 'react';

interface SocialLoginButtonProps {
  googleLogin: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ googleLogin }) => {
  return (
    <button
      className="user-social-btn user-google-btn"
      onClick={() => googleLogin()}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/240px-Google_%22G%22_logo.svg.png"
        alt="Google logo"
        className="user-social-icon"
      />
      <span>Google 계정으로 로그인</span>
    </button>
  );
};

export default SocialLoginButton; 