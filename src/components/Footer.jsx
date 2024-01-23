import { CopyrightIcon } from "./icons/CopyrightIcon";
import { useTheme } from "@/context/ThemeContext";
export const Footer = () => {
  const { theme } = useTheme();
  const bgColor =
    theme == "light" ? "text-gray-600" : "bg-gray-900 text-gray-300";
  return (
    <div
      className={`${bgColor} flex flex-row justify-center items-center gap-2 py-6  sm:px-20 sm:py-6`}
    >
      <CopyrightIcon />
      <p>
        2023 | <span className="underline">Designed</span> and{" "}
        <span className="underline">coded</span> with ❤️️ by Sagar Shah
      </p>
    </div>
  );
};
