import faculty1 from "../assets/images/faculty-1.jpg";
import faculty2 from "../assets/images/faculty-2.jpg";
import faculty3 from "../assets/images/faculty-3.jpg";

export default function FacultyPage() {
  const facultyMembers = [
    {
      img: faculty1,
      name: "Dr. Hedgapure Mahesh S.",
      designation: "Principal",
      qualification: "Ph.D (Pharmacy)",
      subject: "Pharmaceutics",
      experience: "15+ Years",
    },
    {
      img: faculty2,
      name: "Mr. ABC XYZ",
      designation: "Associate Professor",
      qualification: "M.Pharm",
      subject: "Pharmaceutical Chemistry",
      experience: "10 Years",
    },
    {
      img: faculty3,
      name: "Ms. XYZ ABC",
      designation: "Assistant Professor",
      qualification: "M.Pharm",
      subject: "Pharmacology",
      experience: "6 Years",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-semibold text-green-900">Our Faculty</h1>
        <div className="w-28 h-[2px] bg-green-900 mt-3"></div>

        <p className="mt-6 text-sm text-gray-700 max-w-3xl">
          The faculty of Swargiya Lilawati Satish Awhad Pharmacy College
          comprises experienced academicians and professionals dedicated to
          delivering quality education, practical exposure, and ethical values
          essential for pharmacy education.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-white border rounded shadow-sm hover:shadow-md transition"
            >
              <img
                src={faculty.img}
                alt={faculty.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 text-center">
                <h4 className="text-base font-semibold text-gray-800">
                  {faculty.name}
                </h4>
                <p className="text-sm text-green-700 mt-1">
                  {faculty.designation}
                </p>

                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p>{faculty.qualification}</p>
                  <p>{faculty.subject}</p>
                  <p>{faculty.experience} Experience</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-50 p-8 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-green-900 mb-4">
              Faculty Strength
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Highly qualified and experienced faculty members</li>
              <li>Strong academic, research, and industry background</li>
              <li>Balanced emphasis on theory and practical learning</li>
              <li>Student-focused academic guidance</li>
              <li>Commitment to ethical and professional standards</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-green-900 mb-4">
              Teaching & Learning Approach
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Outcome-based and interactive classroom teaching</li>
              <li>Hands-on laboratory and practical sessions</li>
              <li>Case studies, seminars, and presentations</li>
              <li>Regular assessments and academic reviews</li>
              <li>Use of modern teaching methodologies</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-green-900 mb-4">
              Student Support & Mentorship
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Personalized academic mentoring</li>
              <li>Guidance for examinations and performance improvement</li>
              <li>Career counseling and higher education support</li>
              <li>Continuous progress monitoring</li>
              <li>Encouragement for overall professional growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
