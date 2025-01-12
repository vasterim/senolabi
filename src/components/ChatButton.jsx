import { useState } from 'react';
import { FaComments } from 'react-icons/fa';

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleForm}
        className="fixed bottom-4 right-4 z-50 animate-bounce transform hover:scale-110 transition-transform duration-300"
      >
        <FaComments className="text-white bg-blue-500 rounded-full shadow-lg text-6xl p-4" />
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 bg-white p-4 rounded-lg shadow-lg w-80">
          <h2 className="text-lg font-semibold mb-2">Bize Ulaşın</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Adınız
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Adınızı girin"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Mesajınız
              </label>
              <textarea
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Mesajınızı yazın"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Gönder
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatButton;
