import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";
import gallery9 from "../assets/images/gallery-9.jpg";
import gallery10 from "../assets/images/gallery-10.jpg";
import gallery11 from "../assets/images/gallery-11.jpg";
import gallery12 from "../assets/images/gallery-12.jpg";
import gallery13 from "../assets/images/gallery-13.jpg";
import gallery14 from "../assets/images/gallery-14.jpg";
import gallery15 from "../assets/images/gallery-15.jpg";
import gallery16 from "../assets/images/gallery-16.jpg";
import gallery17 from "../assets/images/gallery-17.jpg";

export default function GalleryPage() {
  const events = [
    {
      title: "Cultural & Student Events",
      images: [
        gallery5,
        gallery6,
        gallery7,
        gallery8,
        gallery9,
        gallery10,
        gallery11,
        gallery12,
        gallery13,
        gallery17,
      ],
    },
    {
      title: "Seminars & Workshops",
      images: [gallery3, gallery4, gallery14],
    },
    {
      title: "Academic & Laboratory Activities",
      images: [gallery1, gallery2],
    },
  ];

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold text-green-900">
          College Events Gallery
        </h1>
        <div className="w-28 h-[2px] bg-green-900 mt-3"></div>

        <p className="mt-6 text-sm text-gray-700 max-w-3xl">
          Explore memorable moments from academic programs, laboratory
          practices, seminars, workshops, cultural celebrations, and student
          activities at Swargiya Lilawati Satish Awhad Pharmacy College.
        </p>

        <div className="mt-16 space-y-20">
          {events.map((event, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-green-900">
                {event.title}
              </h2>
              <div className="w-24 h-[2px] bg-green-900 mt-3 mb-10"></div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {event.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden border shadow-sm group rounded"
                  >
                    <img
                      src={img}
                      alt={event.title}
                      className="
                        w-full
                        h-44
                        sm:h-52
                        md:h-60
                        lg:h-56
                        xl:h-60
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
