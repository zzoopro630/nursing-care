"use client";

import React from 'react';

const ConsultationForm = () => {
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
            <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="010-1234-5678" />
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