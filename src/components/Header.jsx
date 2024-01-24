import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  SunIcon,
  MoonIcon,
  ExitIcon,
  HamburgerMenu,
} from "@/components/icons/icon";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const divClassName =
    theme == "light" ? "bg-white text-gray-900" : "bg-gray-950 text-gray-50 ";
  const buttonClassName =
    theme == "light" ? "bg-gray-950 text-gray-50" : "bg-gray-300 text-gray-900";
  const navBarClassName = theme == "light" ? "text-gray-600" : "text-gray-300";

  return (
    <div className={`${divClassName} fixed sm:relative w-full z-20`}>
      <div className="flex flex-row justify-between px-4 py-4 sm:px-[80px] sm:max-w-[1440px] sm:m-auto ">
        <h1 className=" font-bold text-3xl sm:ml-8 tracking-[-0.6px] ">
          <a href="#">&#60;SS /&#62;</a>
        </h1>
        <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center gap-6 mr-8">
          <div
            className={`${navBarClassName} flex flex-row justify-center items-center gap-6 font-medium leading-6`}
          >
            <a href="#section1">About</a>
            <a href="#section2">Work</a>
            <a href="#section3">Testimonials</a>
            <a href="#section4">Contact</a>
            <div className="w-px text-gray-100 h-6	">I</div>
          </div>
          <button onClick={changeThemeHandler}>
            {theme == "light" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={`${buttonClassName} px-4 py-1.5  rounded-xl font-medium `}
          >
            Download CV
          </button>
        </div>
        <div onClick={toggleMenu} className="sm:hidden">
          {menuOpen == false ? <HamburgerMenu /> : <ExitIcon />}
        </div>
      </div>
      {menuOpen && (
        <div className={`${navBarClassName} flex flex-col`}>
          <ul className="p-4 flex flex-col gap-4 border-y-[1px]">
            <a onClick={toggleMenu} href="#section">
              About
            </a>
            <a onClick={toggleMenu} href="#section2">
              Work
            </a>
            <a onClick={toggleMenu} href="#section3">
              Testimonials
            </a>
            <a onClick={toggleMenu} href="#section4">
              Contact
            </a>
          </ul>

          <div className="flex flex-col p-4 gap-4">
            <button
              onClick={changeThemeHandler}
              className="flex justify-between"
            >
              <p>Switch theme</p>
              {theme == "light" ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              className={`${buttonClassName} px-4 py-1.5  rounded-xl font-medium `}
            >
              Download CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
