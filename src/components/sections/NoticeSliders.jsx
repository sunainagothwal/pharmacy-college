import { useState, useEffect, useRef } from "react";
import notice1 from "../../assets/images/notice-1.jpg";
import notice2 from "../../assets/images/notice-2.jpg";

const notices = [notice1, notice2];

export default function NoticeSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 5000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    start();
    return () => stop();
  }, []);

  const prev = () => {
    stop();
    setIndex((prev) => (prev === 0 ? notices.length - 1 : prev - 1));
  };

  const next = () => {
    stop();
    setIndex((prev) => (prev + 1) % notices.length);
  };

  return (
    <section className="bg-white">
      <div className="relative w-screen overflow-hidden h-[70vh] md:h-[80vh]">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {notices.map((img, i) => (
            <div key={i} className="w-screen h-full flex-shrink-0">
              <img
                src={img}
                alt={`Notice ${i + 1}`}
                className="w-full h-full object-contain bg-white"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white text-2xl px-4 py-2"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white text-2xl px-4 py-2"
        >
          ›
        </button>
      </div>

      <div className="border-t border-gray-300 bg-gray-100 py-3 px-4 flex items-center gap-4 text-sm">
        <span className="bg-black text-white px-3 py-1">Daily Alerts:</span>
        <span className="text-gray-800">
          Post HSC Diploma in Pharmacy (D. Pharmacy) last date of registration
          is 29th July 2022. Visit https://phd22.dte.maharashtra.gov.in
        </span>
      </div>
    </section>
  );
}
