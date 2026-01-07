export default function Contact() {
  return (
    <section className="bg-gray-100">
      <div className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-[20%]">
        <h3 className="text-2xl font-semibold text-primary text-center">
          Contact Us
        </h3>

        <p className="mt-4 sm:mt-6 text-sm text-gray-700 text-center max-w-[700px] mx-auto">
          For admissions, academic queries, and general information, please
          contact us using the details below.
        </p>

        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <h4 className="text-lg font-semibold text-textDark">
              College Address
            </h4>

            <div className="mt-4 sm:mt-6 space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                Swargiya Lilawati Satish Awhad Pharmacy College
                <br />
                Khandgaon (Kh.), Tq. Mukhed
                <br />
                Dist. Nanded – 431715
                <br />
                Maharashtra, India
              </p>

              <p>
                <strong>Phone:</strong> +91 9850194948
              </p>
              <p>
                <strong>Email:</strong> 1782principal@msbte.ac.in
              </p>
              <p>
                <strong>Office Hours:</strong> Monday – Friday, 9:00 AM – 5:00
                PM
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                rows="4"
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

        <div className="mt-16 sm:mt-20 lg:mt-24 bg-white shadow-sm overflow-hidden">
          <iframe
            title="College Location"
            src="https://www.google.com/maps?q=Swargiya+Lilawati+Satish+Awhad+Pharmacy+College+Khandgaon&output=embed"
            className="w-full h-[260px] sm:h-[350px] lg:h-[450px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
