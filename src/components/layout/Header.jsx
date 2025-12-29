import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import banner from "../../assets/images/banner.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Faculty", path: "/faculty" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="College Logo"
              className="h-10 sm:h-12 w-10 sm:w-12 object-contain"
            />
            <div>
              <h1 className="text-xs sm:text-sm font-semibold text-blue-900 leading-tight">
                Swargiya Lilawati Satish Awhad
              </h1>
              <p className="text-xs sm:text-sm text-blue-900">Pharmacy College</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 sm:gap-5 text-xs sm:text-sm text-gray-600">
            <span>📞 +91 XXXXX XXXXX</span>
            <a href="#" className="hover:text-blue-900 transition">Facebook</a>
            <a href="#" className="hover:text-blue-900 transition">Instagram</a>
          </div>
          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden text-blue-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-blue-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-center h-14">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `h-14 flex-1 max-w-[150px] flex items-center justify-center text-xs sm:text-sm font-medium text-white transition ${
                    isActive ? "bg-red-600" : "hover:bg-blue-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col bg-blue-800">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `h-12 flex items-center justify-center text-sm font-medium text-white transition ${
                      isActive ? "bg-red-600" : "hover:bg-blue-700"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Banner */}
      <div className="relative w-full h-64 sm:h-80 lg:h-[520px] overflow-hidden">
        <img
          src={banner}
          alt="College Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-16">
          <div className="text-white max-w-xs sm:max-w-md lg:max-w-lg">
            <p className="text-xs sm:text-sm mb-2 tracking-wide">Welcome to</p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight">
              Swargiya Lilawati Satish Awhad <br className="hidden sm:block" />
              Pharmacy College
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-white/90">
              Committed to excellence in pharmaceutical education, research, and ethical professional practices.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}