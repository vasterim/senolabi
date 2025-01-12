import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Siparişimi nasıl takip edebilirim?',
      answer:
        'Siparişinizi hesabınıza giriş yaparak "Siparişlerim" bölümünden takip edebilirsiniz. Ayrıca size gönderilen e-posta üzerinden kargo bilgilerine ulaşabilirsiniz.',
    },
    {
      question: 'İade ve değişim süreci nasıl işler?',
      answer:
        'Ürün iadesi veya değişimi için teslim aldığınız tarihten itibaren 14 gün içerisinde bizimle iletişime geçebilirsiniz. Ürün kullanılmamış ve orijinal ambalajında olmalıdır.',
    },
    {
      question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answer:
        'Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçeneklerini kabul ediyoruz.',
    },
    {
      question: 'Cilt bakım ürünleriniz dermatolojik olarak test edildi mi?',
      answer:
        'Evet, tüm ürünlerimiz dermatolojik olarak test edilmiştir ve güvenle kullanılabilir.',
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-32 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Sıkça Sorulan Sorular
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-gray-100 overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-gray-800 font-semibold focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`h-5 w-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
