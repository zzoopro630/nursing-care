import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsuranceCard from '@/components/InsuranceCard';
import ConsultationForm from '@/components/ConsultationForm';

export default function Home() {
  const cardData = [
    {
      title: "합리적인 보험료",
      description: "꼭 필요한 보장만 담아 불필요한 비용을 줄였습니다. 매월 나가는 보험료 부담을 덜어드립니다."
    },
    {
      title: "간편한 가입 절차",
      description: "복잡한 서류 없이 5분 만에 모바일로 간편하게 가입하세요. 공인인증서도 필요 없습니다."
    },
    {
      title: "신속한 보험금 지급",
      description: "고객님의 힘든 순간을 위해, 복잡한 절차 없이 빠르고 정확하게 보험금을 지급해 드립니다."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="text-center py-20 bg-blue-50">
          <h1 className="text-5xl font-extrabold text-gray-800">
            내일을 위한 가장 든든한 준비
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            예상치 못한 순간에도 안심할 수 있도록, 든든 보험이 당신의 일상을 지켜드립니다.
          </p>
        </section>

        {/* Insurance Cards Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardData.map((card, index) => (
                <InsuranceCard key={index} title={card.title} description={card.description} />
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