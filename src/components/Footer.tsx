import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2025 든든 보험. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 hover:text-white px-2">개인정보처리방침</a>
          <a href="#" className="text-gray-400 hover:text-white px-2">이용약관</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;