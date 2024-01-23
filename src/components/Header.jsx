import Navbar from "./Navbar";
import { useTheme } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@/components/icons/icon";
export const Header = () => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const divClassName =
    theme == "light" ? "text-gray-900" : "bg-gray-950 text-gray-50 ";
  const buttonClassName =
    theme == "light" ? "bg-gray-950 text-gray-50" : "bg-gray-300 text-gray-900";
  const navBarClassName = theme == "light" ? "text-gray-600" : "text-gray-300";

  return (
    <div className={divClassName}>
      <div className="flex flex-row justify-between px-4 py-4 sm:px-[80px] sm:max-w-[1440px] sm:m-auto ">
        <h1 className=" font-bold text-3xl sm:ml-8 tracking-[-0.6px] ">
          &#60;SS /&#62;
        </h1>
        <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center gap-6 mr-8">
          <div
            className={`${navBarClassName} flex flex-row justify-center items-center gap-6 font-medium leading-6`}
          >
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
            className={`${buttonClassName} px-4 py-1.5  rounded-xl font-medium `}
          >
            Download CV
          </button>
        </div>
        <Navbar />
      </div>
    </div>
  );
};
