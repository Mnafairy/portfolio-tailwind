import Navbar from "./Navbar";
import { useTheme } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@/components/icons/icon";
export const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const divClassName = `${theme == "light" ? "" : "bg-gray-950 "}`;
  const buttonClassName = theme == "light" ? "" : "bg-white text-gray-950";

  return (
    <div className={divClassName}>
      <div className="flex flex-row justify-between px-4 py-4 sm:px-[80px] sm:max-w-[1440px] sm:m-auto ">
        <h1 className=" text-gray-900 font-bold text-3xl sm:ml-8 tracking-[-0.6px]">
          &#60;SS /&#62;
        </h1>
        <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center gap-6 mr-8">
          <div className="flex flex-row justify-center items-center gap-6 style-none text-gray-600 font-medium leading-6	">
            <a href="#section">About</a>
            <a href="#section2">Work</a>
            <a href="#section3">Testimonials</a>
            <a href="#section4">Contact</a>
            <div className="w-px text-gray-100 h-6	">I</div>
          </div>
          <button onClick={changeThemeHandler}>
            {theme == "light" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={`${buttonClassName} px-4 py-1.5 bg-gray-950 text-gray-50 rounded-xl `}
          >
            Download CV
          </button>
        </div>
        <Navbar />
      </div>
    </div>
  );
};
