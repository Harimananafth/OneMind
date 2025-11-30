import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Lightbulb } from "lucide-react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return scrollDirection;
};

export default function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`navbar px-4 md:px-10 shadow-sm bg-base-100 sticky-header ${
        scrollDirection === "down" ? "hidden-header" : "visible-header"
      }`}
    >
      <div className="flex gap-2 flex-1 items-center justify-start">
        <Lightbulb className="text-primary " size={25} />
        <p className="text-base-content  text-xl sm:text-2xl uppercase font-extrabold tracking-wider hover:tracking-tighter transition-all duration-150">
          OneMind
        </p>
      </div>
      <ThemeToggle />
    </div>
  );
}
