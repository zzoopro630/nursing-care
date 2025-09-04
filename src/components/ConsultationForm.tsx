"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // EmailJS 라이브러리 import

const ConsultationForm = () => {
  // 이름, 연락처 state 추가
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ... (이전과 동일한 전화번호 포맷팅 코드)
    const rawValue = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    if (rawValue.length > 0) {
      formattedValue = rawValue.substring(0, 3);
      if (rawValue.length > 3) { formattedValue += '-' + rawValue.substring(3, 7); }
      if (rawValue.length > 7) { formattedValue += '-' + rawValue.substring(7, 11); }
    }
    setPhoneNumber(formattedValue);
  };

  // 폼 제출 시 실행될 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 페이지가 새로고침되는 것을 방지

    // EmailJS에 보낼 데이터 (템플릿 변수명과 일치시켜야 함)
    const templateParams = {
      from_name: name,
      interest_item: '간병인보험', // 고정값
      contact_number: phoneNumber,
    };

    // 여기에 EmailJS 웹사이트에서 복사한 ID들을 넣으세요.
    const serviceID = 'service_gf7tr94';
    const templateID = 'template_pkyzv4r';
    const publicKey = 'si6sUamB5hB5f3V6d';

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('신청이 성공적으로 접수되었습니다!');
        // 성공 시 입력 필드 초기화
        setName('');
        setPhoneNumber('');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('오류가 발생했습니다. 다시 시도해 주세요.');
      });
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          지금 바로 전문가와 상담하세요
        </h2>
        {/* form 태그에 onSubmit 이벤트 핸들러 추가 */}
        <form className="bg-gray-50 p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">이름</label>
            {/* 이름 input을 state와 연결 */}
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="홍길동" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required // 필수 항목으로 지정
            />
          </div>

          {/* ... (관심항목, 연락처 input은 이전과 동일) ... */}
          <div className="mb-4">
            <label htmlFor="interest" className="block text-gray-700 font-bold mb-2">관심항목</label>
            <input type="text" id="interest" className="w-full px-3 py-2 border rounded-lg bg-gray-200 text-gray-600 cursor-not-allowed" value="간병인보험" readOnly />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">연락처</label>
            <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="010-1234-5678" value={phoneNumber} onChange={handlePhoneNumberChange} maxLength={13} required />
          </div>
          
          <div className="text-center">
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              상담 신청하기
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;