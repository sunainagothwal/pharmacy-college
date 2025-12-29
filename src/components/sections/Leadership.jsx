import director from "../../assets/images/director.jpg";
import principal from "../../assets/images/principal.jpg";

export default function Leadership() {
  return (
    <section className="bg-white">
      <div
        className="py-24"
        style={{ paddingLeft: "20%", paddingRight: "20%" }}
      >
        <h3 className="text-2xl font-semibold text-blue-900 text-center">
          Leadership
        </h3>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex gap-6 items-start">
            <img
              src={director}
              alt="Director"
              className="w-32 h-40 object-cover"
            />

            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Mr. Parth Narayan Gaikwad
              </h4>
              <p className="text-sm text-blue-900 mt-1">Chairman</p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                The leadership envisions providing quality education that
                nurtures professional competence, ethical values, and a sense of
                responsibility towards society. The institution strives to
                create an environment conducive to academic excellence and
                holistic development.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <img
              src={principal}
              alt="Principal"
              className="w-32 h-40 object-cover"
            />

            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Dr. Hedgapure Mahesh S.
              </h4>
              <p className="text-sm text-blue-900 mt-1">Principal</p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                The college is committed to fostering academic rigor,
                innovation, and professional ethics. Through dedicated faculty
                and student-centric learning, the institution aims to prepare
                competent pharmacists to serve the healthcare needs of society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
