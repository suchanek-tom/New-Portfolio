import SwitchTheme from "./SwitchTheme";
// import SwitchLanguage from "./SwitchLanguage";

const Navbar = () => {
  return (
    <>
      <div className="drawer drawer-end sticky top-0 z-20">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-100 shadow-lg">
            <div className=" px-4 mx-2 text-xl mr-auto block font-semibold lg:ml-0 lg:flex-1">
              Portfolio
            </div>
            <div className="flex lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a
                    className="font-semibold px-2 mx-2 hidden md:flex hover:opacity-50 duration-300 text-lg"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold px-2 mx-3 hidden md:flex hover:opacity-50 duration-300 text-lg"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="font-semibold px-2 mx-3 hidden md:flex hover:opacity-50 duration-300 text-lg"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
                {/* <li> */}
                {/* Language */}
                {/* <SwitchLanguage /> */}
                {/* </li> */}
                <li>
                  {/* Dark/Light mode */}
                  <SwitchTheme />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-2 w-80 h-screen bg-base-200">
            {/* Sidebar content here */}
            <div className=" pt-4 mx-2 text-3xl font-semibold">Menu</div>
            <li>
              <a
                className=" hover:font-semibold mx-2 mt-4 md:flex hover:opacity-50 duration-300 text-lg"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className=" hover:font-semibold mx-2  md:flex hover:opacity-50 duration-300 text-lg"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className=" hover:font-semibold mx-2  md:flex hover:opacity-50 duration-300 text-lg"
                href="#contact"
              >
                Contact
              </a>
            </li>
            {/* <li> */}
            {/* Language */}
            {/* <SwitchLanguage /> */}
            {/* </li> */}
            <li>
              {/* Dark/Light mode */}
              <SwitchTheme />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
