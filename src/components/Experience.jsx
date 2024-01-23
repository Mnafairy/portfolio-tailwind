import Button from "./Button";
import { LogoUpwork } from "@/components";
import { ExperienceData } from "@/utils/experienceData";
import { useTheme } from "@/context/ThemeContext";

export const Experience = () => {
  const { theme } = useTheme();
  const bgColor =
    theme == "light"
      ? "bg-gray-50 text-gray-600"
      : "bg-gray-900  text-gray-300";
  const cardBg = theme == "light" ? "bg-white " : "bg-gray-800";
  const dateColor = theme == "light" ? "text-gray-700" : "text-gray-200";
  const headerColor = theme == "light" ? "text-gray-900" : "text-gray-50";

  return (
    <div className={`${bgColor} px-4 py-16 sm:px-20 sm:py-24 bg-gray-50 `}>
      <div className=" flex flex-col justify-center items-center  gap-6  sm:px-8 sm:gap-12 ">
        <div className="flex flex-col justify-center items-center gap-4 text-center ">
          <Button text="Experience" />
          <p className="text-lg sm:text-xl	">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        {ExperienceData.map((data) => (
          <div
            className={`${cardBg} flex flex-col justify-between gap-4 p-8  border-0	 rounded-lg shadow-md sm:p-8 sm:flex-row sm:gap-12 sm:w-[1000px]`}
          >
            <LogoUpwork />
            <p className={`${dateColor} sm:order-1 `}>{data.date}</p>
            <div className="sm:w-[380px]">
              <h3 className={`${headerColor} font-semibold text-lg mb-4 sm:text-xl`}>
                {data.position}
              </h3>
              <ul className="list-disc ml-5">
                {data.projects.map((list) => (
                  <li>{list}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
