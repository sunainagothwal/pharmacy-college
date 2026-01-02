export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h4 className="text-base sm:text-lg font-semibold">
              Swargiya Lilawati Satish Awhad
            </h4>
            <p className="mt-2 text-xs sm:text-sm">Pharmacy College</p>
            <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed">
              Committed to excellence in pharmaceutical education, ethical
              practice, and service to society.
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li className="hover:text-white transition">Home</li>
              <li className="hover:text-white transition">About</li>
              <li className="hover:text-white transition">Courses</li>
              <li className="hover:text-white transition">Faculty</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4">Contact</h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Khandgaon (Kh.), Tq. Mukhed
              <br />
              Dist. Nanded – 431715
              <br />
              Maharashtra, India
            </p>
            <p className="mt-3 text-xs sm:text-sm text-white/80">
              Phone: +91 9403424325
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold mb-4">
              Working Hours
            </h4>
            <p className="text-xs sm:text-sm text-white/80">Monday – Friday</p>
            <p className="text-xs sm:text-sm text-white/80">
              9:00 AM – 5:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primaryDark text-center text-xs sm:text-sm text-white/80 py-4">
        © {new Date().getFullYear()} Swargiya Lilawati Satish Awhad Pharmacy
        College. All Rights Reserved.
      </div>
    </footer>
  );
}
