import Button from "./Button";
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
    <div className="mx-4 my-16 sm:mx-20 sm:my-24 sm:px-8 text-gray-600 flex flex-col justify-center gap-6 sm:gap-12">
      <div className="text-center ">
        <Button text="Work" />
        <p className="text-lg mt-4">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="sm:flex ">
        <div className="bg-gray-50 p-8 border sm:p-12 sm:w-6/12	">
          <img
            className="h-[250px] w-full rounded-xl  sm:h-[384px] sm:w-full"
            src="/work.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 p-8 border sm:p-12 sm:w-6/12">
          <h3 className="text-gray-900 font-semibold text-lg">Fiskil</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            {buttons.map((e) => {
              return <Button text={e} />;
            })}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 3H21V9"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 14L21 3"
              stroke="#4B5563"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
