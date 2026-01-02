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

pdfjs.GlobalWorkerOptions.workerSrc =
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
        .filter(f => !f.name.startsWith("."))
        .map(f =>
          supabase.storage.from(BUCKET).getPublicUrl(f.name).data.publicUrl
        );

      setFiles(urls);
    }

    load();
  }, []);

  if (!files.length) return null;

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
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
          height: "90vh",
          margin: "0 auto"
        }}
      >
        {files.map(url => (
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
                background: "#111",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <Document file={url}>
                <Page
                  pageNumber={1}
                  width={
                    window.innerWidth > 800
                      ? 800
                      : window.innerWidth - 20
                  }
                />
              </Document>
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
