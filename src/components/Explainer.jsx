function Explainer() {
    return (
      <div className="container mx-auto my-8 px-4 lg:px-32">
        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/600/400?random=1"
              alt="Cilt Bakımı"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cilt Bakımı Testi</h2>
            <p className="text-gray-600 mb-6">
              Cilt Bakımı Testini çözün ve cildinizle eşleşen ürünleri görün.
            </p>
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-900 hover:text-white transition duration-300">
              Şimdi Dene
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Explainer;
  