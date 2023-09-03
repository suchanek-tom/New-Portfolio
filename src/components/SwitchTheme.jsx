//SwitchTheme.tsx

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const SwitchTheme = () => {
  const [theme, setTheme] = useState("luxury");

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "luxury" ? "winter" : "luxury");
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      className=" btn-circle ml-3 hover:opacity-50 duration-300"
      onClick={toggleTheme}
    >
      {theme === "luxury" ? (
        <FiMoon className="w-6 h-6" />
      ) : (
        <FiSun className="w-6 h-6" />
      )}
    </button>
  );
};

export default SwitchTheme;
