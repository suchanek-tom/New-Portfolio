import { useState } from "react";
import data from "./data";
import { useScroll } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react'
import SLider from "./Slider";

const Projects = () => {
  const [projectList, setProjectList] = useState(data);
  const { scrollXProgress } = useScroll();

  return (
    <>
      <div className="hero min-h-screen" id="projects">
        <div className="hero-content flex-wrap lg:flex-row-reverse">
          <div className=" flex-col lg:w-1/2">
            <h1 className="text-5xl font-bold m-4">Projects</h1>
            <p className=" m-4">
              I have been passionately worked on a diverse range of projects
              that showcase my creativity, dedication, and commitment to
              achieving innovative solutions.
            </p>
            <p className=" m-4">
              <b>Languages: </b>HTML, CSS (Tailwindcss + SCSS), JavaScript
              (React + partly Typescript).
            </p>
          </div>
          <div>
            {/* Rights */}
            <SLider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
