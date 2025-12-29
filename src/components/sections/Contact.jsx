export default function Contact() {
  return (
    <section className="bg-gray-100">
      <div
        className="py-24"
        style={{ paddingLeft: "20%", paddingRight: "20%" }}
      >
        <h3 className="text-2xl font-semibold text-blue-900 text-center">
          Contact Us
        </h3>

        <p className="mt-6 text-sm text-gray-700 text-center max-w-[700px] mx-auto">
          For admissions, academic queries, and general information, please
          contact us using the details below.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">
              College Address
            </h4>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Swargiya Lilawati Satish Awhad Pharmacy College
              <br />
              Khandgaon (Kh.), Tq. Mukhed
              <br />
              Dist. Nanded – 431715
              <br />
              Maharashtra, India
            </p>

            <p className="mt-4 text-sm text-gray-700">Phone: +91 XXXXX XXXXX</p>

            <p className="mt-2 text-sm text-gray-700">
              Email: info@slspc.edu.in
            </p>

            <p className="mt-6 text-sm text-gray-700">
              Office Hours: Monday – Friday, 9:00 AM – 5:00 PM
            </p>
          </div>

          <div className="bg-white p-10 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-800">
              Enquiry Form
            </h4>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none"
              />

              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 text-sm font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
