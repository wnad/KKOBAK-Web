import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, password: string) => {
    // 이메일 로그인 로직
    setIsAuthenticated(true);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse: any) => {
      console.log('성공', tokenResponse);
      const credential = tokenResponse.credential;
      if (!credential) return;
      // TODO: 백엔드 로그인 기능 구현되면 아래 주석 해제
      // const user = jwtDecode<any>(credential);
      // console.log('Decoded user info:', user);
      setIsAuthenticated(true);
    },
    onError: () => console.log('실패'),
  });

  return { isAuthenticated, login, googleLogin };
};