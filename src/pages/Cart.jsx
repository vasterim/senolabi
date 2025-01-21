function Cart({ cart }) {
  return (
    <div className="container mx-auto px-4 lg:px-32 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sepet</h1>
      {cart.length > 0 ? (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md bg-gray-100 p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.code}</p>
                <p className="text-gray-600 font-bold">{item.price}</p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Sepetiniz boş.</p>
      )}
    </div>
  );
}

export default Cart;
