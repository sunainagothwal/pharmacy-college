export default function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-semibold">
              Swargiya Lilawati Satish Awhad
            </h4>
            <p className="mt-1 text-sm">Pharmacy College</p>

            <p className="mt-4 text-sm text-white/90 leading-relaxed max-w-sm">
              Committed to excellence in pharmaceutical education, ethical
              practice, and service to society.
            </p>
          </div>

          <div className="md:ml-[9rem]">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              Khandgaon (Kh.), Tq. Mukhed
              <br />
              Dist. Nanded – 431715
              <br />
              Maharashtra, India
            </p>
            <p className="mt-3 text-sm text-white/90">Phone: +91 9403424325</p>
          </div>

          <div className="md:ml-[9rem]">
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <p className="text-sm text-white/90">Monday – Friday</p>
            <p className="text-sm text-white/90">9:00 AM – 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="bg-green-900 text-center text-sm text-white/80 py-4">
        © {new Date().getFullYear()} Swargiya Lilawati Satish Awhad Pharmacy
        College. All Rights Reserved.
      </div>
    </footer>
  );
}
