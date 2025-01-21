import { useState } from 'react';

function Search({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'DR. C. Tuna Temizleme Balsamı',
      description: 'Cildinizi derinlemesine temizler.',
      price: '540.00₺',
      image: 'https://picsum.photos/300/200?random=1',
      code: '1000649',
    },
    {
      id: 2,
      name: 'Nutriplus Recharge',
      description: 'Kafein, Taurin ve B Vitaminleri içerir.',
      price: '800.00₺',
      image: 'https://picsum.photos/300/200?random=2',
      code: '1001860',
    },
    {
      id: 3,
      name: 'Nutriplus Restore',
      description: 'Yenilenmiş bir enerji sağlar.',
      price: '750.00₺',
      image: 'https://picsum.photos/300/200?random=3',
      code: '1001895',
    },
    {
      id: 4,
      name: 'Nutriplus Beauty Shot Collagen',
      description: 'Cildinize parlaklık kazandırır.',
      price: '570.00₺',
      image: 'https://picsum.photos/300/200?random=4',
      code: '1001940',
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 lg:px-32 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ürün Ara</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Ürün ismi yazın..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md bg-white p-4 relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{product.code}</p>
              <p className="text-gray-600 text-xl font-bold mb-4">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full border border-gray-500 text-gray py-2 rounded-lg hover:bg-gray-600 hover:text-white transition"
              >
                Sepete Ekle
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 col-span-full">Hiçbir ürün bulunamadı.</div>
        )}
      </div>
    </div>
  );
}

export default Search;
