export const Header = () => {
  return (
    <div className="flex flex-row justify-between px-20 py-4 ">
      <h1 className="font-bold text-3xl ">&#60;SS/&#62;</h1>
      <div className="flex flex-row justify-center items-center gap-6  ">
        <li>About</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
        <button>Sun</button>
        <button>Download CV</button>
      </div>
    </div>
  );
};
