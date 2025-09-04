import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsuranceCard from '@/components/InsuranceCard';
import ConsultationForm from '@/components/ConsultationForm';

export default function Home() {
  // 기존 텍스트 데이터 대신 이미지 파일 경로를 넣습니다.
  const cardImages = [
    "/images/card-image-1.jpg",
    "/images/card-image-2.jpg",
    "/images/card-image-3.jpg",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="text-center py-20 bg-blue-50">
          <h1 className="text-5xl font-extrabold text-gray-800">
            간병인보험, 가족을 위하는 보험
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            예상치 못한 순간에도 안심할 수 있도록, 보험이 당신의 일상을 지켜드립니다.
          </p>
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

        {/* Consultation Form Section */}
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}