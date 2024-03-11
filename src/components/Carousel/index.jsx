import { useRef, useState, useEffect } from 'react';
import './style.css';

function Carousel() {
  const carouselRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const element = carouselRef.current;
    const imageContainer = imageContainerRef.current;
    const width = element.offsetWidth;

    const clonedImage = imageContainer.firstElementChild.cloneNode(true);
    imageContainer.appendChild(clonedImage);

    imageContainer.style.transition = 'transform 0.5s ease-in-out';
    imageContainer.style.transform = `translateX(-${width}px)`;

    setTimeout(() => {
      imageContainer.style.transition = 'none';
      imageContainer.removeChild(imageContainer.firstElementChild);
      imageContainer.style.transform = 'translateX(0)';

      setCurrentIndex((currentIndex + 1) % 5);

      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const element = carouselRef.current;
    const imageContainer = imageContainerRef.current;
    const width = element.offsetWidth;

    const clonedImage = imageContainer.lastElementChild.cloneNode(true);
    imageContainer.insertBefore(clonedImage, imageContainer.firstElementChild);

    imageContainer.style.transition = 'none';
    imageContainer.style.transform = `translateX(-${width}px)`;

    void imageContainer.offsetWidth;

    imageContainer.style.transition = 'transform 0.5s ease-in-out';
    imageContainer.style.transform = 'translateX(0)';

    setTimeout(() => {
      imageContainer.removeChild(imageContainer.lastElementChild);

      setCurrentIndex((currentIndex - 1 + 5) % 5);

      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered, isAnimating]);

  return (
    <div>
      <div
        id="carousel"
        ref={carouselRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div id="imageContainer" ref={imageContainerRef}>
          <img src="/epson.webp" className="carousel-img" alt="Epson" />
          <img src="/flights.webp" className="carousel-img" />
          <img src="/spicejet.webp" className="carousel-img" />
          <img src="/zebronics.webp" className="carousel-img" />
          <img src="/intel-core.webp" className="carousel-img" />
        </div>
        <button className="carouselButton" id="prevButton" onClick={prevSlide}>❮</button>
        <button className="carouselButton" id="nextButton" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
}

export default Carousel;
