import Image from 'next/image';
import React from 'react';

// 카드가 받을 정보의 타입을 정의합니다. (이미지 주소)
interface CardProps {
  imageUrl: string;
}

const InsuranceCard: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    // 그림자, 둥근 모서리 등 기존 디자인은 유지합니다.
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      {/* Next.js의 Image 컴포넌트를 사용해 이미지를 최적화합니다. */}
      <div className="relative w-full aspect-square">
    <Image
      src={imageUrl}
      alt="보험 상품 이미지"
      fill // layout="fill"은 fill 속성 하나로 바뀜
      className="object-cover" // objectFit은 Tailwind CSS 클래스로 처리
    />
      </div>
    </div>
  );
};

export default InsuranceCard;