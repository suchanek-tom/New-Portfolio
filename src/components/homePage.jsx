import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Navbar from "./navbar";

import { motion as m } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <m.body
        initial={{ opacity: 0.75 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </m.body>
    </>
  );
};

export default HomePage;
