import Button from "./Button";
import { useTheme } from "@/context/ThemeContext";
import { iconData } from "@/utils/iconData";
export const Skills = () => {
  const { theme } = useTheme();
  const bgColor =
    theme == "light" ? "text-gray-600" : "bg-gray-950 text-gray-300";
  return (
    <div className={bgColor}>
      <div className="py-16 px-4 text-center sm:py-24 sm:px-20 sm:max-w-[1440px] sm:m-auto ">
        <div className="mb-6 sm:mb-12">
          <Button text="Skills" />
          <p className=" text-lg mt-4 sm:text-xl">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex flex-wrap gap-y-4 gap-x-12 sm:h-[250px] sm:gap-24 ">
          {iconData.map(
            (e, index) => (
              <div className="flex flex-col justify-center items-center text-center m-auto">
                {e.icon}
                {e.iconName}
              </div>
            )
            // <Icon icon={e.icon} iconName={e.iconName} key={index} />;
          )}
        </div>
      </div>
    </div>
  );
};
