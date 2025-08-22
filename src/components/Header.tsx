import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl text-blue-600">든든한 간병인보험</h1>
        <nav>
          <a href="#" className="text-gray-600 hover:text-blue-500 px-3">상품 소개</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 px-3">고객 센터</a>
          <a href="#" className="text-gray-600 hover:text-blue-500 px-3">로그인</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;