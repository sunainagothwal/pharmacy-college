import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import FacultyPage from "./pages/FacultyPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public Website Pages */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />

      <Route
        path="/about"
        element={
          <DefaultLayout>
            <AboutPage />
          </DefaultLayout>
        }
      />

      <Route
        path="/courses"
        element={
          <DefaultLayout>
            <CoursesPage />
          </DefaultLayout>
        }
      />

      <Route
        path="/faculty"
        element={
          <DefaultLayout>
            <FacultyPage />
          </DefaultLayout>
        }
      />

      <Route
        path="/gallery"
        element={
          <DefaultLayout>
            <GalleryPage />
          </DefaultLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <DefaultLayout>
            <ContactPage />
          </DefaultLayout>
        }
      />

      {/* Admin Pages (No Header / Footer) */}
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
