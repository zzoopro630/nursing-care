"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'; // next/navigation에서 useRouter를 import

const ConsultationForm = () => {
  const router = useRouter(); // useRouter 훅을 초기화합니다.
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 중 상태 추가

  // ... (handlePhoneNumberChange 함수는 이전과 동일)
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    let formattedValue = '';
    if (rawValue.length > 0) {
      formattedValue = rawValue.substring(0, 3);
      if (rawValue.length > 3) { formattedValue += '-' + rawValue.substring(3, 7); }
      if (rawValue.length > 7) { formattedValue += '-' + rawValue.substring(7, 11); }
    }
    setPhoneNumber(formattedValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // 제출 시작 시 버튼 비활성화

    const templateParams = {
      from_name: name,
      interest_item: '간병인보험',
      contact_number: phoneNumber,
    };

    const serviceID = 'service_gf7tr94';
    const templateID = 'template_pkyzv4r';
    const publicKey = 'si6sUamB5hB5f3V6d';

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // ✅ 성공 시 alert 대신 /thank-you 페이지로 이동시킵니다.
        router.push('/thank-you');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('오류가 발생했습니다. 다시 시도해 주세요.');
        setIsSubmitting(false); // 실패 시 버튼 다시 활성화
      });
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 max-w-2xl">
<h2 className="text-4xl font-black text-center text-gray-800 mb-8">
  지금 바로 <br />
  간병인보험 전문가와 <br />
  상담하세요
</h2>
        <form className="bg-gray-50 p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          {/* ... (이름, 관심항목, 연락처 input은 이전과 동일) ... */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">이름</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="홍길동" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="interest" className="block text-gray-700 font-bold mb-2">관심항목</label>
            <input type="text" id="interest" className="w-full px-3 py-2 border rounded-lg bg-gray-200 text-gray-600 cursor-not-allowed" value="간병인보험" readOnly />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">연락처</label>
            <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="010-1234-5678" value={phoneNumber} onChange={handlePhoneNumberChange} maxLength={13} required />
          </div>
          
          <div className="text-center">
            {/* 버튼에 isSubmitting 상태를 연결하여 중복 클릭 방지 */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? '신청하는 중...' : '상담 신청하기'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;