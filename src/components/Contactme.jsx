import Button from "./Button";
import Copy from "react-copy-to-clipboard";
import {
  GithubIcon,
  TwitterIcon,
  FigmaBlackIcon,
  CopyIcon,
  PhoneIcon,
  MessageIcon,
} from "@/components/icons/icon";
import { useTheme } from "@/context/ThemeContext";
export const Contactme = () => {
  const { theme } = useTheme();
  const bgColor =
    theme == "light" ? "text-gray-600 " : "bg-gray-950 text-gray-300";
  const contactColor =
    theme == "light" ? "text-gray-900 " : "bg-gray-950 text-gray-50";

  return (
    <div
      className={`${bgColor} flex flex-col justify-center items-center px-4 py-16 sm:py-24 sm:px-20 gap-6`}
    >
      <div className="flex flex-col justify-center items-center gap-4 ">
        <Button text="Get in touch" />
        <p className="text-xl	text-center sm:w-[580px]">
          What's next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="flex flex-row justify-center items-center gap-4">
          <MessageIcon />
          <p className={` ${contactColor} text-lg font-semibold sm:text-4xl`}>
            reachsagarshah@gmail.com
          </p>
          <CopyIcon />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <PhoneIcon />
          <p className={`${contactColor} text-lg font-semibold sm:text-4xl`}>
            +91 8980500565
          </p>
          <CopyIcon />
        </div>
      </div>
      <div>
        <p>You may also find me on these platforms!</p>
        <div className="flex flex-row gap-4 justify-center mt-2">
          <GithubIcon />
          <TwitterIcon />
          <FigmaBlackIcon />
        </div>
      </div>
    </div>
  );
};
