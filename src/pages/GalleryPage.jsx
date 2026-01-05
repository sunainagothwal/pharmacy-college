import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";

export default function GalleryPage() {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-green-800 text-center">
          Gallery
        </h2>

        <p className="mt-4 text-sm text-gray-700 text-center max-w-3xl mx-auto">
          Explore moments from campus life, laboratories, academic activities,
          seminars, workshops, and student events at Swargiya Lilawati Satish
          Awhad Pharmacy College.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded shadow-sm border"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
