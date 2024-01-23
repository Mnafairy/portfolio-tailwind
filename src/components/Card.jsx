import { LogoUpwork } from "@/components";
const Card = () => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-white border-0	 rounded-lg shadow-md sm:px-20 sm:py-24 sm:flex-row sm:gap-12 ">
      <LogoUpwork />
      <p className="text-gray-700 sm:order-1 ">Nov 2021 - Present</p>
      <div>
        <h3 className="text-gray-900 font-semibold text-lg mb-4 sm:text-xl	">
          Sr. Frontend Developer
        </h3>
        <ul className="text-gray-600 list-disc ml-5">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
          <li>Sed quis justo ac magna.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
