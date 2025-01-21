function Contact() {
    return (
      <div className="container mx-auto px-4 lg:px-32 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Bize Ulaşın</h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">İletişim Bilgilerimiz</h2>
            <p className="text-gray-600 mb-4">Sorularınız veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz:</p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Adres:</strong> Örnek Mahallesi, Örnek Sokak, No: 123, İstanbul</li>
              <li><strong>Telefon:</strong> <a href="tel:+905555555555" className="text-blue-500 hover:underline">+90 555 555 55 55</a></li>
              <li><strong>E-posta:</strong> <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">İletişim Formu</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Adınız</label>
                <input
                  type="text"
                  placeholder="Adınızı girin"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresiniz</label>
                <input
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                <textarea
                  placeholder="Mesajınızı yazın"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-500 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  