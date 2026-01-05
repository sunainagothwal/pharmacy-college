import heroImg from "../assets/images/course-hero.jpg";
import classImg from "../assets/images/course-classroom.jpg";
import labImg from "../assets/images/course-lab.jpg";

export default function CoursesPage() {
  return (
    <main className="bg-white">
   
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-3xl font-semibold text-green-900">
            Courses Offered
          </h1>
          <div className="w-24 h-[2px] bg-green-900 mt-3"></div>

          <p className="mt-6 text-sm text-gray-700 max-w-3xl leading-relaxed">
            Swargiya Lilawati Satish Awhad Pharmacy College offers professional
            pharmacy education designed to build strong academic foundations,
            practical skills, and ethical values aligned with industry and
            healthcare needs.
          </p>
        </div>
      </section>

      <section className="py-7">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Diploma in Pharmacy (D.Pharm)
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              The Diploma in Pharmacy (D.Pharm) is a foundational professional
              program designed to prepare students for careers in community
              pharmacy, hospitals, pharmaceutical industries, and healthcare
              services.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
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
                <strong>Eligibility:</strong> As per PCI norms
              </p>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden">
            <img
              src={heroImg}
              alt="Pharmacy Course"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="shadow-lg overflow-hidden">
            <img
              src={classImg}
              alt="Classroom Teaching"
              className="w-full h-[360px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">
              Course Description
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The D.Pharm program is structured to provide students with strong
              theoretical knowledge and extensive hands-on practical exposure.
              The curriculum emphasizes drug formulation, dispensing, patient
              care, and ethical pharmacy practice.
            </p>

            <p className="text-sm text-gray-700 leading-relaxed">
              Teaching is supported through classroom instruction, laboratory
              training, case-based learning, industrial exposure, and hospital
              visits to ensure students are industry-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-green-900 mb-12">
            Subjects Covered
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                First Year
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Pharmaceutics</li>
                <li>Pharmaceutical Chemistry</li>
                <li>Pharmacognosy</li>
                <li>Human Anatomy & Physiology</li>
                <li>Health Education & Community Pharmacy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Second Year
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>Pharmacology</li>
                <li>Pharmaceutical Jurisprudence</li>
                <li>Drug Store & Business Management</li>
                <li>Hospital & Clinical Pharmacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">
              Practical Training
            </h3>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Fully equipped laboratories</li>
              <li>Formulation, compounding, and dispensing practice</li>
              <li>Prescription handling and patient counseling</li>
              <li>Industrial visits and professional workshops</li>
            </ul>
          </div>

          <div className="shadow-lg overflow-hidden">
            <img
              src={labImg}
              alt="Laboratory Training"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-green-900 mb-4">
              Career Opportunities
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Community Pharmacist</li>
              <li>Hospital Pharmacist</li>
              <li>Medical Store Manager</li>
              <li>Pharmaceutical Sales Executive</li>
              <li>Quality Control Assistant</li>
              <li>Higher Studies (B.Pharm)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-900 mb-4">
              Admission Information
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Admissions as per Government & PCI guidelines</li>
              <li>Reservation rules applicable</li>
              <li>Document verification mandatory</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
