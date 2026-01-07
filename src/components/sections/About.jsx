import aboutBg from "../../assets/images/about-bg.jpg";

export default function About() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="bg-white/80">
        <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-[20%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* TEXT CARD */}
            <div className="bg-white p-8 sm:p-10 shadow-md">
              <h3 className="text-2xl font-semibold text-primary">About Us</h3>

              <p className="mt-6 text-sm text-gray-700 leading-relaxed">
                Swargiya Lilawati Satish Awhad Pharmacy College strives to be a
                center of excellence in pharmaceutical education through
                academic rigor, ethical values, and professional commitment.
              </p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                The institution focuses on nurturing competent pharmacists
                equipped with scientific knowledge, practical skills, and a
                strong sense of responsibility towards healthcare and society.
              </p>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                Through quality teaching, modern infrastructure, and dedicated
                faculty, the college aims to contribute meaningfully to the
                pharmaceutical profession and public health.
              </p>
            </div>

            {/* VALUES */}
            <div className="relative w-full lg:h-[420px]">
              <div
                className="
                  flex flex-col sm:flex-row gap-4
                  lg:absolute lg:bottom-8 lg:left-0 lg:right-0 lg:px-6
                  lg:mb-[7.5rem]
                "
              >
                <div className="flex-1 bg-primary text-white text-center py-6 font-medium">
                  Integrity
                </div>
                <div className="flex-1 bg-primary text-white text-center py-6 font-medium">
                  Ethics
                </div>
                <div className="flex-1 bg-primary text-white text-center py-6 font-medium">
                  Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
