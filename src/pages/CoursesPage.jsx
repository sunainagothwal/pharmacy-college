import heroImg from "../assets/images/course-hero.jpg";
import classImg from "../assets/images/course-classroom.jpg";
import labImg from "../assets/images/course-lab.jpg";

export default function CoursesPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="inline-block">
            <h1 className="text-3xl font-semibold text-green-900">
              Courses Offered
            </h1>
            <span className="block w-24 h-[2px] bg-green-900 mt-2"></span>
          </div>

          <p className="mt-5 text-sm text-gray-700 max-w-3xl leading-relaxed">
            Swargiya Lilawati Satish Awhad Pharmacy College offers comprehensive
            pharmacy education programs approved by statutory bodies, focusing
            on academic excellence, practical exposure, and professional
            competence in healthcare and pharmaceutical sciences.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-semibold text-green-900">
                Diploma in Pharmacy (D.Pharm)
              </h2>
              <span className="block w-20 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              A two-year diploma program designed to build a strong foundation
              in pharmaceutical sciences, dispensing techniques, and patient
              care. The program prepares students for professional practice in
              retail and hospital pharmacies.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <p>
                <strong>Duration:</strong> 2 Years
              </p>
              <p>
                <strong>Course Type:</strong> Diploma
              </p>
              <p>
                <strong>Mode:</strong> Full-Time
              </p>
              <p>
                <strong>Approval:</strong> PCI
              </p>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden">
            <img
              src={heroImg}
              alt="Diploma in Pharmacy"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="shadow-lg overflow-hidden">
            <img
              src={classImg}
              alt="B.Pharm Classroom"
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div>
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-semibold text-green-900">
                Bachelor of Pharmacy (B.Pharm)
              </h2>
              <span className="block w-20 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              A four-year undergraduate degree program emphasizing
              pharmaceutical technology, medicinal chemistry, pharmacology,
              pharmacognosy, and research methodologies. The course develops
              industry-ready professionals with strong scientific and analytical
              skills.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <p>
                <strong>Duration:</strong> 4 Years
              </p>
              <p>
                <strong>Course Type:</strong> Degree
              </p>
              <p>
                <strong>Mode:</strong> Full-Time
              </p>
              <p>
                <strong>Approval:</strong> PCI & AICTE
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <h2 className="text-2xl font-semibold text-green-900">
                Direct Second Year (B.Pharm)
              </h2>
              <span className="block w-20 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-5">
              A lateral entry program for D.Pharm diploma holders, allowing
              direct admission into the second year of the B.Pharm course as per
              regulatory norms.
            </p>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1.5">
              <li>Eligibility: Diploma in Pharmacy (D.Pharm)</li>
              <li>Admission as per government regulations</li>
              <li>Industry-oriented curriculum</li>
              <li>Equal academic standards as regular B.Pharm</li>
            </ul>
          </div>

          <div className="shadow-lg overflow-hidden">
            <img
              src={labImg}
              alt="Pharmacy Laboratory"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <div className="inline-block mb-3">
              <h3 className="text-xl font-semibold text-green-900">
                Practical Training & Facilities
              </h3>
              <span className="block w-16 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1.5">
              <li>Modern and fully equipped laboratories</li>
              <li>Hands-on formulation and dispensing practice</li>
              <li>Clinical pharmacy and hospital exposure</li>
              <li>Industrial visits and professional workshops</li>
            </ul>
          </div>

          <div>
            <div className="inline-block mb-3">
              <h3 className="text-xl font-semibold text-green-900">
                Career Opportunities
              </h3>
              <span className="block w-16 h-[2px] bg-green-900 mt-2"></span>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1.5">
              <li>Community and Hospital Pharmacist</li>
              <li>Pharmaceutical Industry & Research</li>
              <li>Quality Control & Assurance</li>
              <li>Medical Sales & Marketing</li>
              <li>Higher Studies and Professional Growth</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
