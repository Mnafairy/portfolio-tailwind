import Button from "./Button";
import { WorkIcon } from "./icons/WorkIcon";
export const Work = () => {
  const buttons = [
    "React",
    "Next.js",
    "Typecsript",
    "Nest.js",
    "PostgreSQL",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  return (
    <div className="sm:max-w-[1440px] sm:m-auto">
      <div className="mx-4 my-16  sm:mx-20 sm:my-24 sm:px-8 text-gray-600 flex flex-col justify-center gap-6 sm:gap-12 ">
        <div className="text-center ">
          <Button text="Work" />
          <p className="text-lg mt-4">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="sm:flex shadow-md border-0 rounded-xl">
          <div className=" rounded-l-lg bg-gray-50 p-8 sm:p-12 sm:w-6/12	">
            <img
              className="h-[250px] w-full rounded-xl  sm:h-[384px] sm:w-full"
              src="/work.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-6 p-8 sm:p-12 sm:w-6/12">
            <h3 className="text-gray-900 font-semibold text-lg">Fiskil</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              {buttons.map((e) => {
                return <Button text={e} />;
              })}
            </div>
            <WorkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
