export default function Courses() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-900 text-center">
          Courses Offered
        </h3>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-base text-gray-700 text-center max-w-2xl mx-auto">
          The college offers pharmacy programs designed to provide strong
          academic foundations, practical exposure, and professional competence
          in line with industry and regulatory standards.
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
              Diploma in Pharmacy (D.Pharm)
            </h4>

            <p className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              A two-year diploma program that builds a strong foundation in
              pharmaceutical sciences, dispensing techniques, and patient care.
              The course prepares students for professional practice in retail
              and hospital pharmacies.
            </p>

            <ul className="mt-4 text-xs sm:text-sm text-gray-700 list-disc list-inside space-y-2">
              <li>Duration: 2 Years</li>
              <li>Approved by Pharmacy Council of India (PCI)</li>
              <li>Training in community & hospital pharmacy</li>
              <li>Strong focus on practical skills</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
              Bachelor of Pharmacy (B.Pharm)
            </h4>

            <p className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              A four-year undergraduate degree program emphasizing
              pharmaceutical technology, medicinal chemistry, pharmacology,
              pharmacognosy, and research methodologies for industry-ready
              professionals.
            </p>

            <ul className="mt-4 text-xs sm:text-sm text-gray-700 list-disc list-inside space-y-2">
              <li>Duration: 4 Years</li>
              <li>Approved by PCI & AICTE</li>
              <li>Career opportunities in industry & research</li>
              <li>Eligibility for higher studies</li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800">
              Direct Second Year (B.Pharm)
            </h4>

            <p className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              A lateral entry program designed for D.Pharm holders, allowing
              direct admission into the second year of the B.Pharm course as per
              regulatory norms.
            </p>

            <ul className="mt-4 text-xs sm:text-sm text-gray-700 list-disc list-inside space-y-2">
              <li>Eligibility: Diploma in Pharmacy (D.Pharm)</li>
              <li>Admission as per government regulations</li>
              <li>Industry-oriented curriculum</li>
              <li>Equal academic exposure as regular B.Pharm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
