import { useState } from "react";
import { toast } from "sonner";
import { Document, Page } from "react-pdf";

export default function NoticeViewer({ fileUrl, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [rotate, setRotate] = useState(0);

  async function handleDownload() {
    try {
      const res = await fetch(fileUrl);
      const blob = await res.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "notice.pdf";
      link.click();

      window.URL.revokeObjectURL(link.href);
    } catch (e) {
      toast.error("Failed to download: " + e.message, {
        duration: 4000,
      });
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.9)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          color: "#fff",
          background: "#222",
          padding: "10px 15px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <button onClick={onClose}>❌ Close</button>

        <span style={{ marginLeft: 10 }}>Page</span>
        <strong>
          {page} / {numPages || "—"}
        </strong>

        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          ◀ Prev
        </button>

        <button
          disabled={!numPages || page >= numPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next ▶
        </button>

        <span style={{ marginLeft: 20 }}>Zoom</span>
        <button onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}>
          -
        </button>
        <button onClick={() => setScale((s) => s + 0.2)}>+</button>

        <button onClick={() => setRotate((r) => r + 90)}>🔄 Rotate</button>

        <button
          onClick={handleDownload}
          style={{ marginLeft: "auto", color: "white" }}
        >
          ⬇ Download
        </button>

        <button onClick={() => window.open(fileUrl, "_blank")}>🖨 Print</button>
      </div>

      {/* PDF */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Document
          file={fileUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<h2 style={{ color: "white" }}>Loading PDF…</h2>}
        >
          <Page
            pageNumber={page}
            scale={scale}
            rotate={rotate}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>
    </div>
  );
}
