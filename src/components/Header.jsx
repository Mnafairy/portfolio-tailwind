import Navbar from "./Navbar";
import { SunIcon } from "./icons/SunIcon";
export const Header = () => {
  return (
    <div className="flex flex-row justify-between px-4 py-4 sm:px-[80px] ">
      <h1 className="font-bold text-3xl sm:ml-8 tracking-[-0.6px]">
        &#60;SS /&#62;
      </h1>
      <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center gap-6 mr-8">
        <div className="flex flex-row justify-center items-center gap-6 style-none text-gray-600 font-medium leading-6	">
          <a href="#section">About</a>
          <a href="#section2">Work</a>
          <a href="#section3">Testimonials</a>
          <a href="#section4">Contact</a>
          <div className="w-px text-gray-100 h-6	">I</div>
        </div>
        <button>
          <SunIcon />
        </button>
        <div class="flex flex-col justify-center ml-3">
          <input
            type="checkbox"
            name="light-switch"
            class="light-switch sr-only"
          />
          <label class="relative cursor-pointer p-2" for="light-switch">
            <svg
              class="dark:hidden"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-slate-300"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                class="fill-slate-400"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
            <svg
              class="hidden dark:block"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-slate-400"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                class="fill-slate-500"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
            <span class="sr-only">Switch to light / dark version</span>
          </label>
        </div>
        <button className="px-4 py-1.5 bg-gray-900 text-white rounded-xl ">
          Download CV
        </button>
      </div>
      {/* <div className="flex items-center sm:hidden">
        <svg
        width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icon">
            <path
              id="Vector"
              d="M4 12H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M4 6H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M4 18H20"
              stroke="#4B5563"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div> */}
      <Navbar />
    </div>
  );
};
