import Button from "./Button";
import Card from "./Card";
export const Experience = () => {
  return (
    <div className="px-4 py-16 sm:px-20 sm:py-24 bg-gray-50">
      <div className="flex flex-col justify-center items-center  gap-6  sm:px-8 sm:gap-12  ">
        <div className="flex flex-col justify-center items-center gap-4 text-center ">
          <Button text="Experience" />
          <p className="text-lg	text-gray-600 sm:text-xl	">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
