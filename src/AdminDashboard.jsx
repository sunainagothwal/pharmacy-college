import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [user, setUser] = useState(undefined);
  const [file, setFile] = useState(null);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadNotices = async () => {
    const { data, error } = await supabase.storage
      .from("notices")
      .list("", {
        limit: 100,
        sortBy: { column: "created_at", order: "desc" },
      });

    if (error) return console.log(error);

    const validFiles = (data || []).filter(
      (f) => f.name !== ".emptyFolderPlaceholder"
    );

    const mapped = validFiles.map((item) => {
      const {
        data: { publicUrl },
      } = supabase.storage.from("notices").getPublicUrl(item.name);

      return {
        name: item.name,
        url: publicUrl,
        type: item.name.split(".").pop().toLowerCase(),
      };
    });

    setNotices(mapped);
  };

  useEffect(() => {
    let mounted = true;

    const init = async () => {
      const res = await supabase.auth.getUser();
      if (!mounted) return;

      const loggedUser = res.data.user;
      setUser(loggedUser);

      if (!loggedUser) {
        navigate("/login", { replace: true });
        return;
      }

      await loadNotices();
      if (mounted) setLoading(false);
    };

    init();
    return () => (mounted = false);
  }, [navigate]);

  if (!user || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-600 text-lg font-semibold">
          Checking Admin Access...
        </div>
      </div>
    );
  }

  const uploadNotice = async () => {
    if (!file) return alert("Please select a file");

    const allowed = ["pdf"];
const ext = file.name.split(".").pop().toLowerCase();

if (!allowed.includes(ext)) {
  alert("Only PDF files are allowed");
  return;
}

    const fileName = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage
      .from("notices")
      .upload(fileName, file, { cacheControl: "3600" });

    if (error) {
      alert(error.message || "Upload failed");
      return;
    }

    alert("Uploaded Successfully");
    setFile(null);
    loadNotices();
  };

  const deleteNotice = async (fileName) => {
    if (!confirm("Delete this file?")) return;

    const { error } = await supabase.storage
      .from("notices")
      .remove([fileName]);

    if (error) {
      alert("Delete failed");
      return;
    }

    loadNotices();
  };

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Top Bar */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky top-0 z-50">
        <h2 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h2>

        <button
          onClick={logout}
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm transition"
        >
          Logout
        </button>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
            📤 Upload New Notice
          </h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="file"
  accept="application/pdf"
  onChange={(e) => setFile(e.target.files[0])}
              className="border rounded-lg px-3 py-2 w-full bg-gray-50 focus:ring focus:ring-blue-400 outline-none"
            />

            <button
              onClick={uploadNotice}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
            >
              Upload
            </button>
          </div>
        </div>

        {/* Notices List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            📂 Uploaded Notices ({notices.length})
          </h3>

          {notices.length === 0 ? (
            <p className="text-gray-500 text-center py-6">
              No notices uploaded yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {notices.map((n) => (
                <div
                  key={n.name}
                  className="border rounded-xl shadow-sm p-3 bg-gray-50 hover:shadow-lg transition flex flex-col"
                >
                  <div className="w-full h-52 flex items-center justify-center bg-white rounded-lg overflow-hidden border">
                    {n.type === "pdf" ? (
                      <iframe src={n.url} className="w-full h-full" />
                    ) : (
                      <img
                        src={n.url}
                        alt="notice"
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  <p className="mt-2 text-sm text-gray-600 truncate">
                    {n.name}
                  </p>

                  <button
                    onClick={() => deleteNotice(n.name)}
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-lg shadow transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
