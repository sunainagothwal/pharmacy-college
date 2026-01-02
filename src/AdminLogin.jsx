import { useState } from "react";
import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 flex items-center gap-2 text-sm font-medium 
        bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition"
      >
        ← Back to Home
      </button>

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 px-3 py-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={login} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@example.com"
            />
          </div>

         <div>
  <label className="block text-sm font-medium mb-1">
    Password
  </label>

  <div className="relative">
    <input
      type={showPass ? "text" : "password"}
      required
      value={password}
      onChange={e => setPassword(e.target.value)}
      className="w-full border rounded-lg px-3 py-2 outline-none 
                 focus:ring-2 focus:ring-blue-500 pr-12 bg-gray-50"
      placeholder="********"
    />

    {/* Eye Toggle Button */}
    <button
  type="button"
  onClick={() => setShowPass(!showPass)}
  className="absolute right-2 top-1/2 -translate-y-1/2
             bg-gray-200 hover:bg-gray-300
             w-10 h-10 rounded-full flex items-center justify-center
             transition text-gray-700 shadow-sm"
>
  {showPass ? (
    // Eye Off Icon (clean heroicon)
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M3 3l18 18M10.5 10.5A3 3 0 0113.5 13.5M4.5 7.5C3.1 9 2.25 10.8 2.04 12
           3.42 16.36 7.36 19.5 12 19.5c1.2 0 2.36-.18 3.44-.52M19.5 16.5c1.4-1.5
           2.25-3.3 2.46-4.5C20.58 7.64 16.64 4.5 12 4.5c-1.2 0-2.36.18-3.44.52" />
    </svg>
  ) : (
    // Eye Icon (clean heroicon)
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M2.04 12C3.42 7.64 7.36 4.5 12 4.5s8.58 3.14 9.96 7.5
           c-1.38 4.36-5.32 7.5-9.96 7.5S3.42 16.36 2.04 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )}
</button>

  </div>
</div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
