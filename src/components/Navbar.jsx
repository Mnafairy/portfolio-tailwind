import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sm:hidden  flex flex-col p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="hidden md:flex space-x-4">
          <div className="text-white">About</div>
          <div className="text-white">Work</div>
          <div className="text-white">Testimonials</div>
          <div className="text-white">Contact</div>
        </div> */}

        <div >
          {/* Hamburger menu icon */}
          <button className="text-black" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Mobile navigation links */}
          {menuOpen && (
            <div className="mt-2 flex flex-col space-y-2 text-gray-600">
              <ul className="p-4 flex flex-col gap-4">
                <li>About</li>
                <li>Work</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
