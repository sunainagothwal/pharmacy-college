import { useState, useEffect } from "react";
import gallery1 from "../../assets/images/gallery-1.jpg";
import gallery2 from "../../assets/images/gallery-2.jpg";
import gallery3 from "../../assets/images/gallery-3.jpg";
import gallery4 from "../../assets/images/gallery-4.jpg";
import gallery5 from "../../assets/images/gallery-5.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Gallery
        </h3>
        <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-700 max-w-2xl mx-auto">
          Campus, laboratories, academic activities, and institutional events.
        </p>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-16 relative w-full overflow-hidden h-48 sm:h-64 lg:h-96">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Optional: Add dots for navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
