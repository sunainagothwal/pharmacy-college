import QuoteLine from "../components/sections/QuoteLine";
import NoticeSlider from "../components/sections/NoticeSliders";
import About from "../components/sections/About";
import Leadership from "../components/sections/Leadership";
import Courses from "../components/sections/Courses";
import Faculty from "../components/sections/Faculty";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <QuoteLine />
      <NoticeSlider />
      <About />
      <Leadership />
      <Courses />
      <Faculty />
      <Gallery />
      <Contact />
    </>
  );
}
