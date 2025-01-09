import { useState } from 'react';

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images?.length) return null;

  return (
    <div className="w-full max-w-[760px] mx-auto">
      <div className="relative w-full aspect-[760/562] mb-4">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />

        <button
          onClick={handlePrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-20 flex items-center justify-center bg-white/50 rounded-md shadow-md hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <i className="fa fa-chevron-left text-gray-700"></i>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-20 flex items-center justify-center bg-white/50 rounded-md shadow-md hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <i className="fa fa-chevron-right text-gray-700"></i>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          index !== currentIndex && (
            <div key={index} className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
