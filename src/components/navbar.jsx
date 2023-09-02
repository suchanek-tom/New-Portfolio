import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-10 shadow-lg">
        <div className="navbar-start">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" href="#about">
              Portfolio
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className=""></div>
          <a className="btn mx-2 hidden md:flex" href="#about">
            About
          </a>
          <a className="btn mx-2 hidden md:flex" href="#projects">
            Projects
          </a>
          <a className="btn mx-2 hidden md:flex" href="#contact">
            Contact
          </a>
        </div>
        {/* Navabr */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <a href="#about" className=" text-xl">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className=" text-xl">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className=" text-xl">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Dark/Light mode */}
        <SwitchTheme />
      </div>
    </>
  );
};

export default Navbar;
