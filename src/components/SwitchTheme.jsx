//SwitchTheme.tsx

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const SwitchTheme = () => {
  const [theme, setTheme] = useState("luxury");

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "luxury" ? "winter" : "luxury");
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "luxury" ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchTheme;
