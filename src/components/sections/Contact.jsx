export default function Contact() {
  return (
    <section className="bg-gray-100">
      <div
        className="py-24"
        style={{ paddingLeft: "20%", paddingRight: "20%" }}
      >
        <h3 className="text-2xl font-semibold text-primary text-center">
          Contact Us
        </h3>

        <p className="mt-6 text-sm text-gray-700 text-center max-w-[700px] mx-auto">
          For admissions, academic queries, and general information, please
          contact us using the details below.
        </p>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="bg-white p-10 shadow-sm rounded-sm">
            <h4 className="text-lg font-semibold text-textDark">
              College Address
            </h4>

            <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Swargiya Lilawati Satish Awhad Pharmacy College
                <br />
                Khandgaon (Kh.), Tq. Mukhed
                <br />
                Dist. Nanded – 431715
                <br />
                Maharashtra, India
              </p>

              <p>Phone: +91 9850194948</p>

              <p>Email: 1782principal@msbte.ac.in</p>

              <p>Office Hours: Monday – Friday, 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          <div className="bg-white p-10 shadow-sm">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-primary"
              />

              <textarea
                placeholder="Message"
                rows="5"
                className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-primary sm:col-span-2"
              ></textarea>

              <button
                type="submit"
                className="bg-primary hover:bg-primaryDark transition text-white px-6 py-3 text-sm font-medium sm:col-span-2 w-fit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 bg-white shadow-sm overflow-hidden">
          <iframe
            title="College Location"
            src="https://www.google.com/maps?q=Swargiya+Lilawati+Satish+Awhad+Pharmacy+College+Khandgaon&output=embed"
            className="w-full h-[450px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
