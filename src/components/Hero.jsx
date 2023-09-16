import { TypeAnimation } from "react-type-animation";
import { AiFillDownSquare } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200" id="about">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHzqbT1bnivuw/profile-displayphoto-shrink_800_800/0/1692796595171?e=1698278400&v=beta&t=Atg7EszF5fLTTgzA8_fRL18bhh0DUlvJMdcDknetl7g"
            className="max-w-xs rounded-lg shadow-2xl mx-8"
          />
          <div>
            <h1 className="text-5xl font-bold">Tomáš Suchanek</h1>
            <div className=" my-4">
              {/* Typing text */}
              <TypeAnimation
                sequence={[
                  "Web developer",
                  3000,
                  "Frontend developer",
                  3000,
                  "Student",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1.5em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <a
              href="#projects"
              className=" flex items-center btn text-lg lg:text-left"
            >
              <button className=" font-bold lg:w-min">Projects</button>
              <AiFillDownSquare />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
