import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          감사합니다.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-md">
          신청이 성공적으로 접수되었습니다. <br />
          빠른 시간 내에 해피콜을 드릴 예정입니다.
        </p>
      </div>
    </main>
  );
};

export default ThankYouPage;