import React from 'react';
import '../../../styles/global.css';

const Privacy = () => {
  return (
    <div className="policy-page">
      <h1>개인정보처리방침</h1>

      <section>
        <h2>제1조 (수집하는 개인정보의 항목)</h2>
        <ul>
          <li>
            <strong>필수 수집 정보</strong><br/>
            소셜 로그인 시 제공되는 ID 토큰(JWT), 이메일, 이름, 프로필 사진(URL)
          </li>
          <li>
            <strong>선택 수집 정보</strong><br/>
            프로필 커스터마이징(별명 등)
          </li>
        </ul>
      </section>

      <section>
        <h2>제2조 (개인정보 수집방법)</h2>
        <p>이용자가 소셜 로그인 버튼(Google, Kakao, Naver)을 클릭하여 ID 토큰을 제공할 때 수집합니다.</p>
      </section>

      <section>
        <h2>제3조 (개인정보의 처리 목적)</h2>
        <ol>
          <li>회원 관리: 로그인 인증 및 서비스 이용 식별</li>
          <li>서비스 제공: 운동 기록 관리, 통계 생성</li>
          <li>마케팅·광고: 신규 기능 안내, 설문조사</li>
          <li>문의사항 응대</li>
        </ol>
      </section>

      <section>
        <h2>제12조 (고지 의무)</h2>
        <p>
          개인정보처리방침을 변경하는 경우 시행 7일 전 웹사이트 공지 또는 개별 이메일 통지합니다.
        </p>
      </section>

      <div className="contact-info">
        <h2>문의처</h2>
        <p>이메일: support@kkobak.com</p>
        <p>전화: 000-1234-5678</p>
      </div>
    </div>
  );
};

export default Privacy; 