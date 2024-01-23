import { CopyrightIcon } from "./icons/CopyrightIcon";
export const Footer = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 py-6 text-gray-600 sm:px-20 sm:py-6 ">
      <CopyrightIcon />
      <p>
        2023 | <span className="underline">Designed</span> and{" "}
        <span className="underline">coded</span> with ❤️️ by Sagar Shah
      </p>
    </div>
  );
};
