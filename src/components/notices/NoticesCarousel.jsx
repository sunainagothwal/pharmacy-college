import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import NoticeViewer from "./NoticeViewer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const BUCKET = "notices";

export default function NoticesCarousel() {
  const [files, setFiles] = useState([]);
  const [showViewer, setShowViewer] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .list("", { sortBy: { column: "created_at", order: "desc" } });

      if (error) return console.error(error);

      const urls = data
        .filter((f) => !f.name.startsWith("."))
        .map(
          (f) =>
            supabase.storage.from(BUCKET).getPublicUrl(f.name).data.publicUrl
        );

      setFiles(urls);
    }

    load();
  }, []);

  if (!files.length) return null;

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: "30px 0",
          color: "#166534",
          fontWeight: "600",
          fontSize: "22px",
        }}
      >
        Latest Notices
      </h2>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "85vh",
          margin: "0 auto",
          background: "#f0fdf4",
          borderRadius: "6px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {files.map((url) => (
          <SwiperSlide key={url}>
            <div
              onClick={() => {
                setSelectedFile(url);
                setShowViewer(true);
              }}
              style={{
                width: "100%",
                height: "100%",
                overflowY: "auto",
                background: "#ecfdf5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                padding: "16px",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #bbf7d0",
                }}
              >
                <Document file={url}>
                  <Page
                    pageNumber={1}
                    width={
                      window.innerWidth > 800 ? 780 : window.innerWidth - 40
                    }
                  />
                </Document>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showViewer && (
        <NoticeViewer
          fileUrl={selectedFile}
          onClose={() => setShowViewer(false)}
        />
      )}
    </>
  );
}
