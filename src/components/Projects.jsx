import { useState } from "react";
import data from "./data";

const Projects = () => {
  const [projectList, setProjectList] = useState(data);

  return (
    <>
      <div className="hero min-h-screen" id="projects">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" flex-col w-1/2">
            <h1 className="text-5xl font-bold m-4">Projects</h1>
            <p className=" m-4">
              I have been passionately working on a diverse range of projects
              that showcase my creativity, dedication, and commitment to
              achieving innovative solutions
            </p>
            <p className=" m-4">
              <b>Languages: </b>HTML, CSS (Tailwindcss + SCSS), JavaScript
              (React + Typescript)
            </p>
          </div>
          <div>
            {/* Rights */}
            <div className="carousel-item">
              <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-base-200 rounded-box">
                {projectList.map((oneProject) => {
                  const { id, image, title, description } = oneProject;
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
                          <button className="btn btn-primary">Visit</button>
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
