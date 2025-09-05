"use client";

import React, { useState, useEffect, Suspense } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter, useSearchParams } from 'next/navigation';

const ConsultationFormInner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  // ✅ 1. state 변수를 8자리 숫자만 관리하도록 변경
  const [lastEightDigits, setLastEightDigits] = useState(''); 
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referrerInfo, setReferrerInfo] = useState('');

  // 이전 페이지 정보 수집
  useEffect(() => {
    const collectReferrerInfo = () => {
      let info = '';
      
      // URL 파라미터 확인
      const utm_source = searchParams.get('utm_source');
      const utm_medium = searchParams.get('utm_medium');
      const utm_campaign = searchParams.get('utm_campaign');
      const source = searchParams.get('source');
      
      if (utm_source || utm_medium || utm_campaign || source) {
        info += `UTM정보: ${utm_source ? `source=${utm_source}` : ''} ${utm_medium ? `medium=${utm_medium}` : ''} ${utm_campaign ? `campaign=${utm_campaign}` : ''} ${source ? `source=${source}` : ''}`.trim();
      }
      
      // 레퍼러 정보 확인
      if (document.referrer) {
        info += info ? ` | 이전페이지: ${document.referrer}` : `이전페이지: ${document.referrer}`;
      }
      
      // 사용자 에이전트 정보
      if (navigator.userAgent) {
        const userAgent = navigator.userAgent;
        // 간단한 브라우저/디바이스 정보만 추출
        const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent);
        const deviceType = isMobile ? '모바일' : '데스크탑';
        info += info ? ` | 접속환경: ${deviceType}` : `접속환경: ${deviceType}`;
      }
      
      setReferrerInfo(info);
    };

    collectReferrerInfo();
  }, [searchParams]);

  // ✅ 2. 8자리 숫자를 포맷팅하는 함수로 로직 변경
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // 숫자만 추출
    const truncatedValue = rawValue.substring(0, 8); // 최대 8자리로 제한

    let formattedValue = '';
    if (truncatedValue.length > 4) {
      // 4자리 입력 후 자동으로 하이픈 추가
      formattedValue = `${truncatedValue.substring(0, 4)}-${truncatedValue.substring(4)}`;
    } else {
      formattedValue = truncatedValue;
    }
    setLastEightDigits(formattedValue);
  };

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // 숫자만 추출
    const truncatedValue = rawValue.substring(0, 6); // 최대 6자리로 제한
    setBirthDate(truncatedValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 전송할 때는 '010-'와 8자리 숫자를 합쳐서 보냄
    const fullPhoneNumber = `010-${lastEightDigits}`;

    const templateParams = {
      from_name: name,
      interest_item: '간병인보험',
      contact_number: fullPhoneNumber, // 완성된 전체 번호로 전송
      birth_date: birthDate,
      gender: gender,
      referrer_info: referrerInfo || '직접 접속',
    };

    const serviceID = 'service_gf7tr94';
    const templateID = 'template_pkyzv4r';
    const publicKey = 'si6sUamB5hB5f3V6d';

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        router.push('/thank-you');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('오류가 발생했습니다. 다시 시도해 주세요.');
        setIsSubmitting(false);
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
          {/* Hidden field for referrer information */}
          <input type="hidden" value={referrerInfo} />
          {/* ... (이름, 관심항목 input은 이전과 동일) ... */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">이름</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="홍길동" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="interest" className="block text-gray-700 font-bold mb-2">관심항목</label>
            <input type="text" id="interest" className="w-full px-3 py-2 border rounded-lg bg-gray-200 text-gray-600 cursor-not-allowed" value="간병인보험" readOnly />
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="birthDate" className="block text-gray-700 font-bold mb-2">생년월일</label>
              <input 
                type="text" 
                id="birthDate" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="950315 (6자리 숫자)"
                value={birthDate}
                onChange={handleBirthDateChange}
                maxLength={6}
                required 
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">성별</label>
              <div className="flex items-center space-x-4 h-10">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="남자"
                    checked={gender === '남자'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                    required
                  />
                  남자
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="여자"
                    checked={gender === '여자'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-2"
                    required
                  />
                  여자
                </label>
              </div>
            </div>
          </div>

          {/* ✅ 3. 연락처 입력란의 HTML 구조 변경 */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">연락처</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                010-
              </span>
              <input 
                type="tel"
                id="phone" 
                className="w-full pl-12 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="1234-5678"
                value={lastEightDigits}
                onChange={handlePhoneChange}
                maxLength={9} // 1234-5678 (9자리)
                required 
              />
            </div>
          </div>
          
          <div className="text-center">
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400" disabled={isSubmitting}>
              {isSubmitting ? '신청하는 중...' : '상담 신청하기'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const ConsultationForm = () => {
  return (
    <Suspense fallback={
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-black text-center text-gray-800 mb-8">
            지금 바로 <br />
            간병인보험 전문가와 <br />
            상담하세요
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="text-center text-gray-600">로딩 중...</div>
          </div>
        </div>
      </section>
    }>
      <ConsultationFormInner />
    </Suspense>
  );
};

export default ConsultationForm;