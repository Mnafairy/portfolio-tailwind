export const About = () => {
  return (
    <div className="py-24 px-20 bg-gray-50">
      <div className="flex flex-col items-center justify-center gap-12  px-8">
        <button className="w-[105px] h-7 px-5 py-1 text-gray-600 text-sm font-medium bg-gray-200 rounded-xl	">
          About me
        </button>
        <div>
          <div>
            <img
              className="max-w-[400px] max-h-[480px] min-w-[280px] min-h-[360px] "
              src="/profile.png"
              alt=""
            />
            <div></div>
          </div>
          <div>
            <h3></h3>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
