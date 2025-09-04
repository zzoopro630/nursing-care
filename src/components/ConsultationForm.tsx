"use client";

import React, { useState } from 'react'; // useState를 import 합니다.

const ConsultationForm = () => {
  // 전화번호 입력값을 저장할 state를 만듭니다.
  const [phoneNumber, setPhoneNumber] = useState('');

  // 전화번호 입력값이 변경될 때마다 실행될 함수
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 입력값에서 숫자만 추출합니다.
    const rawValue = e.target.value.replace(/\D/g, '');
    let formattedValue = '';

    // 숫자를 010-1234-5678 형식으로 자동 변환합니다.
    if (rawValue.length > 0) {
      formattedValue = rawValue.substring(0, 3);
      if (rawValue.length > 3) {
        formattedValue += '-' + rawValue.substring(3, 7);
      }
      if (rawValue.length > 7) {
        formattedValue += '-' + rawValue.substring(7, 11);
      }
    }
    
    setPhoneNumber(formattedValue);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          지금 바로 전문가와 상담하세요
        </h2>
        <form className="bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">이름</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="홍길동" />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">연락처</label>
            {/* 전화번호 input 태그를 수정합니다. */}
            <input 
              type="tel" // type을 "tel"로 지정하는 것이 좋습니다.
              id="phone" 
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="010-1234-5678"
              value={phoneNumber} // state와 input의 값을 동기화합니다.
              onChange={handlePhoneNumberChange} // 값이 변경될 때마다 함수를 실행합니다.
              maxLength={13} // 하이픈 포함 최대 길이(13)를 지정합니다.
            />
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