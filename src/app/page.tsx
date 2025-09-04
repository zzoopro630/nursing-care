// 상단 import 부분에 ImageSlider를 추가합니다.
import ImageSlider from '@/components/ImageSlider';
import InsuranceCard from '@/components/InsuranceCard';
import ConsultationForm from '@/components/ConsultationForm';

export default function Home() {
  // 슬라이드에 사용할 이미지 경로들을 배열로 만듭니다.
  const sliderImages = [
    "/images/slider-1.jpg",
    "/images/slider-2.jpg",
    "/images/slider-3.jpg",
  ];

  const cardImages = [
    "/images/card-image-1.jpg",
    "/images/card-image-2.jpg",
    "/images/card-image-3.jpg",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="text-center py-20 bg-blue-50">
          <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            간병인보험, <br />가족을 위한 보험
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              예상치 못한 순간에도 안심할 수 있도록, <br className="sm:hidden" />보험이 당신의 일상을 지켜드립니다.
            </p>
          </div>
        </section>

        {/* Insurance Cards Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              상품 주요 특징
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 반복문을 통해 이미지 카드를 3개 생성합니다. */}
              {cardImages.map((imageUrl, index) => (
                <InsuranceCard key={index} imageUrl={imageUrl} />
              ))}
            </div>
          </div>
        </section>

        {/* Image Slider Section (새로 추가) */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <ImageSlider images={sliderImages} />
          </div>
        </section>

        {/* Consultation Form Section */}
        <ConsultationForm />
      </main>
    </div>
  );
}