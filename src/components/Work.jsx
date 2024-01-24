import Button from "./Button";
import { WorkIcon } from "./icons/WorkIcon";
import { useTheme } from "@/context/ThemeContext";
import { WorkData } from "@/utils/workData";
export const Work = () => {
  const { theme } = useTheme();
  const bgColor =
    theme == "light" ? "text-gray-600" : "bg-gray-950 text-gray-300";
  const headerColor = theme == "light" ? "text-gray-900" : "text-gray-50";
  const textBoxBg = theme == "light" ? "white" : "bg-gray-800 ";
  const boxBgColor = theme == "light" ? "bg-gray-50" : "bg-gray-700";

  return (
    <div className={bgColor}>
      <div className="sm:max-w-[1440px] sm:m-auto px-4 py-16  sm:px-20 sm:py-24">
        <div className="sm:px-8  flex flex-col justify-center gap-6 sm:gap-12 ">
          <div className="text-center ">
            <Button text="Work" />
            <p className="text-lg mt-4">
              Some of the noteworthy projects I have built:
            </p>
          </div>
          {WorkData.map((data) => (
            <div className="sm:flex justify-center  shadow-md border-0 rounded-xl odd:flex-row-reverse ">
              <div
                className={`${boxBgColor} rounded-l-xl p-8 sm:p-12 sm:w-[580px]`}
              >
                <img
                  className="h-[250px] w-full rounded-xl  sm:h-[384px] sm:w-full"
                  src="/work.png"
                  alt=""
                />
              </div>
              <div
                className={`${textBoxBg} rounded-r-xl  flex flex-col gap-6 p-8 sm:p-12 sm:w-[580px]`}
              >
                <h3 className={`${headerColor} font-semibold text-lg`}>
                  {data.title}
                </h3>
                <p>{data.description}</p>
                <div className="flex flex-row flex-wrap gap-2">
                  {data.usedTools.map((e) => {
                    return <Button text={e} />;
                  })}
                </div>
                <WorkIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
