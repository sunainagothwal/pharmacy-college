import aboutBg from "../../assets/images/about-bg.jpg";

export default function About() {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="bg-white/80">
        <div
          className="py-24"
          style={{ paddingLeft: "20%", paddingRight: "20%" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white p-10 shadow-md">
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

            <div className="relative w-full h-[420px]">
              <div className="absolute bottom-8 left-0 right-0 flex gap-6 px-6">
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
