import { Route, Routes } from "react-router";
import { Home } from "../Home/Home";
import NotFound from "../not-found/NotFound";
import About from "../about/About";
import Contact from "../contact/Contact";
import Works from "../works/Works";
import Resume from "../resume/Resume";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/works" element={<Works />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
