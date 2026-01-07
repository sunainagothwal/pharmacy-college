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
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-green-800 text-center">
          Our Faculty
        </h2>

        <p className="mt-4 text-sm text-gray-700 text-center max-w-3xl mx-auto">
          The faculty at Swargiya Lilawati Satish Awhad Pharmacy College forms
          the backbone of the institution. Our teaching staff comprises
          qualified, experienced, and dedicated professionals committed to
          academic excellence and student development.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Faculty Strength
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Highly qualified and experienced teaching staff</li>
              <li>Strong academic and practical background</li>
              <li>Student-centric teaching methodology</li>
              <li>Continuous academic guidance and mentoring</li>
              <li>Commitment to ethical and professional values</li>
            </ul>
          </div>
        </div>

        <h3 className="mt-20 text-2xl font-semibold text-green-800 text-center">
          Faculty Members
        </h3>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

        <div className="bg-gray-50 p-8 rounded shadow-sm">
          <h3 className="text-lg font-semibold text-green-800 mb-4">
            Teaching & Learning Approach
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>Interactive classroom lectures</li>
            <li>Hands-on laboratory training</li>
            <li>Case-based and concept-driven learning</li>
            <li>Regular internal assessments</li>
            <li>Individual student mentoring</li>
          </ul>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded shadow-sm">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Student Support & Mentorship
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Academic counseling</li>
              <li>Exam preparation guidance</li>
              <li>Career and higher studies advice</li>
              <li>Continuous performance evaluation</li>
              <li>Encouragement for professional growth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
