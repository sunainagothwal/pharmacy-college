import campusImg from "../assets/images/about-campus.jpg";
import legacyImg from "../assets/images/about-legacy.jpg";
import labImg from "../assets/images/about-lab.jpg";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-semibold text-green-900">
                About the Institution
              </h2>
              <span className="block w-16 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Swargiya Lilawati Satish Awhad Pharmacy College, Khandgaon (Kh.),
              Taluka Mukhed, District Nanded, Maharashtra, is a professionally
              managed institution committed to excellence in pharmaceutical
              education. The college was established with the vision of
              providing quality pharmacy education to students from rural and
              semi-urban backgrounds and preparing them to meet the growing
              demands of the healthcare and pharmaceutical industries.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              The institution emphasizes academic excellence, practical
              knowledge, ethical values, and social responsibility. With a
              learner-centric approach, the college nurtures students into
              competent pharmacy professionals capable of serving society with
              integrity and skill.
            </p>
          </div>

          <div className="overflow-hidden shadow-lg">
            <img
              src={campusImg}
              alt="College Campus"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-lg">
            <img
              src={legacyImg}
              alt="College Legacy"
              className="w-full h-[320px] object-cover"
            />
          </div>

          <div>
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-semibold text-green-900">
                Legacy & Inspiration
              </h2>
              <span className="block w-16 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The college is named in memory of Swargiya Lilawati Satish Awhad,
              symbolizing dedication to education, discipline, and community
              development. The institution carries forward this legacy by
              empowering young minds with knowledge, skills, and professional
              ethics in the field of pharmacy.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              Inspired by strong moral values and a commitment to social
              upliftment, the institution strives to create responsible
              healthcare professionals who contribute meaningfully to society
              and the nation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-semibold text-green-900">
                Academic Excellence
              </h2>
              <span className="block w-16 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The academic framework of the college is designed to balance
              theoretical learning with hands-on practical exposure. The
              curriculum is delivered through interactive classroom teaching,
              structured practical sessions, and continuous evaluation methods.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              To bridge the gap between academics and real-world application,
              the institution promotes industrial visits, workshops, seminars,
              guest lectures, and exposure to modern pharmacy practices.
            </p>
          </div>

          <div className="overflow-hidden shadow-lg">
            <img
              src={labImg}
              alt="Laboratory Facilities"
              className="w-full h-[320px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 border border-gray-200">
            <div className="inline-block mb-3">
              <h3 className="text-xl font-semibold text-green-900">Vision</h3>
              <span className="block w-12 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              To emerge as a center of excellence in pharmaceutical education by
              nurturing knowledgeable, skilled, ethical, and socially
              responsible pharmacy professionals.
            </p>

            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>
                To foster innovation, research orientation, and lifelong
                learning.
              </li>
              <li>
                To align pharmaceutical education with industry standards and
                best practices.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <div className="inline-block mb-3">
              <h3 className="text-xl font-semibold text-green-900">Mission</h3>
              <span className="block w-12 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <ul className="text-sm text-gray-700 space-y-3 list-disc list-inside">
              <li>To provide quality education in pharmaceutical sciences</li>
              <li>To promote practical and industry-oriented learning</li>
              <li>To develop competent professionals with ethical values</li>
              <li>
                To serve society through healthcare awareness and education
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
