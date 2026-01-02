export default function Faculty() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary text-center">
          Faculty Members
        </h3>

        <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-base text-gray-700 text-center max-w-2xl mx-auto">
          Our faculty members are highly qualified, experienced, and dedicated
          professionals who actively contribute to teaching, research, and the
          overall development of students.
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16 overflow-x-auto">
          <table className="w-full border border-gray-200 text-xs sm:text-sm lg:text-base">
            <thead className="bg-primary text-white">
              <tr>
                <th className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 text-left">
                  Sr. No
                </th>
                <th className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 text-left">
                  Name
                </th>
                <th className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 text-left">
                  Designation
                </th>
                <th className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 text-left">
                  Qualification
                </th>
                <th className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 text-left">
                  Experience
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-green-50 transition">
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  1
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 font-medium text-textDark">
                  Dr. Hedgapure Mahesh S.
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  Principal
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  Ph.D (Pharmacy)
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  15+ Years
                </td>
              </tr>

              <tr className="bg-gray-50 hover:bg-green-50 transition">
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  2
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 font-medium text-textDark">
                  Mr. ABC XYZ
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  Associate Professor
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  M.Pharm
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  10 Years
                </td>
              </tr>

              <tr className="hover:bg-green-50 transition">
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  3
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 font-medium text-textDark">
                  Ms. XYZ ABC
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  Assistant Professor
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  M.Pharm
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  6 Years
                </td>
              </tr>

              <tr className="bg-gray-50 hover:bg-green-50 transition">
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  4
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3 font-medium text-textDark">
                  Mr. PQR LMN
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  Lecturer
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  B.Pharm, M.Pharm
                </td>
                <td className="border border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                  4 Years
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
