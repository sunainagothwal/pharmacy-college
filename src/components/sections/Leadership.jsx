import director from "../../assets/images/director.jpg";
import principal from "../../assets/images/principal.jpg";

export default function Leadership() {
  return (
    <section className="bg-white">
      <div className="py-24 px-[5%]">
        <h3 className="text-2xl font-semibold text-primary text-center">
          Leadership
        </h3>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
            <div className="bg-white p-3 shadow-md w-full sm:w-[180px] md:w-auto flex justify-center">
              <img
                src={director}
                alt="Chairman"
                className="w-full max-h-[220px] md:w-[740px] md:h-[250px] object-contain md:object-cover"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-textDark">
                Mr. Parth Narayan Gaikwad
              </h4>
              <p className="text-sm text-primary mt-1">Chairman</p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                The leadership envisions providing quality education that
                nurtures professional competence, ethical values, and a sense of
                responsibility towards society. The institution strives to
                create an environment conducive to academic excellence and
                holistic development.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
            <div className="bg-white p-3 shadow-md w-full sm:w-[180px] md:w-auto flex justify-center">
              <img
                src={principal}
                alt="Principal"
                className="w-full max-h-[220px] md:w-[740px] md:h-[250px] object-contain md:object-cover"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-textDark">
                Dr. Hedgapure Mahesh S.
              </h4>
              <p className="text-sm text-primary mt-1">Principal</p>

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
