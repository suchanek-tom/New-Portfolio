import { useState } from "react";
import data from "./data";
import { useScroll } from "framer-motion";
import { motion as m } from "framer-motion";

const Projects = () => {
  const [projectList, setProjectList] = useState(data);
  const { scrollXProgress } = useScroll();

  return (
    <>
      <div className="hero min-h-screen " id="projects">
        <div className="hero-content flex-wrap lg:flex-row-reverse">
          <div className=" flex-col lg:w-1/2">
            <h1 className="text-5xl font-bold m-4">Projects</h1>
            <p className=" m-4">
              I have been passionately working on a diverse range of projects
              that showcase my creativity, dedication, and commitment to
              achieving innovative solutions
            </p>
            <p className=" m-4">
              <b>Languages: </b>HTML, CSS (Tailwindcss + SCSS), JavaScript
              (React + partly Typescript)
            </p>
          </div>
          <div>
            {/* Rights */}
            <div className="carousel-item">
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-200 rounded-box shadow-lg">
                {projectList.map((oneProject) => {
                  const { id, image, title, description, link } = oneProject;
                  <m.div
                    className="fixed h-3 bg-red-300 top-0 left-0 right-0 origin-top z-10"
                    style={{ scaleX: scrollXProgress }}
                  />;
                  return (
                    <div
                      key={id}
                      className="carousel-item card w-96 bg-base-100 shadow-xl"
                    >
                      <figure>
                        <img src={image} alt="image" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                          <a
                            className="btn btn-primary"
                            href={link}
                            target="blank"
                          >
                            Visit
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
