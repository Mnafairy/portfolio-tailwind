import { useTheme } from "@/context/ThemeContext";
import {
  GithubIcon,
  TwitterIcon,
  FigmaBlackIcon,
  GreendotIcon,
  TagIcon,
} from "@/components/icons/icon";
export const Hero = () => {
  const { theme } = useTheme();
  const divClassName = `flex flex-col justify-center items-center gap-12  py-16 px-4 sm:px-20 sm:py-24 sm:flex sm:flex-row-reverse  ${
    theme == "light" ? "text-white" : "bg-gray-950"
  }`;
  return (
    <div className={divClassName}>
      <div className="flex flex-col justify-start items-center w-[343px] h-[300px] sm:w-[400px] sm:h-[380px] relative">
        <img
          className="w-60	 h-[280px] sm:w-72 sm:h-80 z-10"
          src="/pic.png"
          alt=""
        />
        <div className="w-72 h-[280px] sm:w-[280px] sm:h-80 bg-gray-200 absolute z-0 top-5 sm:top-10 sm:bottom-0 sm:right-2"></div>
      </div>
      <div className="flex flex-col gap-12 max-w-3xl ">
        <div>
          <h1 className="text-gray-900 text-4xl sm:text-6xl font-bold mb-2 leading-[72px] sm:tracking-[-1.2px]">
            Hi, I'm Sagar 👋
          </h1>
          <p className="text-gray-600 leading-6">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="text-gray-600 leading-6">
          <div className="flex gap-2 mb-2 ">
            <TagIcon />
            <p>Ahmedabad, India</p>
          </div>

          <div className="flex flex-row gap-2">
            <div className="p-2">
              <GreendotIcon />
            </div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-2.5">
          <GithubIcon />
          <TwitterIcon />
          <FigmaBlackIcon />
        </div>
      </div>
    </div>
  );
};
