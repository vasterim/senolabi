import { useState, useEffect } from 'react';
import image1 from '../assets/background.jpg';
import image2 from '../assets/background2.jpg';
import image3 from '../assets/background3.jpg';

const images = [
  image1,
  image2,
  image3
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold p-4 text-2xl lg:p-14 lg:text-4xl">{"<"}</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 font-bold p-4 text-2xl lg:p-14 lg:text-4xl">{">"}</button>
    </div>
  );
}

export default Slider;
