import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const InsuranceCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default InsuranceCard;