import { Moon, MoonStar, SunDim } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "onemind-default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "onemind-default" ? "onemind-light" : "onemind-default"));
  };

  return (
    <label className="swap swap-rotate flex-none">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "onemind-light"}
      />

      {/* sun icon */}
      <SunDim size={25} className="swap-off text-yellow-400" />

      {/* moon icon */}
      <Moon size={25} className="swap-on text-sky-600" />
    </label>
  );
}
