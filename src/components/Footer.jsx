function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4 lg:px-32">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-4">Şenol LTD</h2>
              <p className="text-gray-400">
                Kaliteli ürün ve hizmet sunarak müşteri memnuniyetini ön planda tutuyoruz.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-12 text-center md:text-left">
              <div>
                <h3 className="font-bold text-white mb-3">Bağlantılar</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-red-300 transition">Ana Sayfa</a></li>
                  <li><a href="/about" className="hover:text-red-300 transition">Hakkımızda</a></li>
                  <li><a href="/products" className="hover:text-red-300 transition">Ürünler</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-3">Destek</h3>
                <ul className="space-y-2">
                  <li><a href="/contact" className="hover:text-red-300 transition">İletişim</a></li>
                  <li><a href="/faq" className="hover:text-red-300 transition">Sıkça Sorulan Sorular</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6">
            <p className="text-sm text-gray-400">&copy; 2025 Tüm Hakları Saklıdır.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  