import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
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
    <>
    <Toaster
        position="top-center"
        richColors
        closeButton
        expand
      />
    <Routes>

      {/* Normal Site Layout */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />

      {/* NO Header / Footer */}
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
    </>
  );
}
