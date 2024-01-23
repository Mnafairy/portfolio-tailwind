import Button from "./Button";
import { useTheme } from "@/context/ThemeContext";
export const About = () => {
  const { theme } = useTheme();
  const bgColor =
    theme == "light" ? "bg-gray-50 text-gray-600" : "bg-gray-900 text-gray-300";
  const headerColor = theme == "light" ? "text-gray-900" : "text-gray-50 ";
  const boxClassName = theme == "light" ? "bg-gray-200" : "bg-gray-700";
  return (
    <div className={`py-16 px-4 sm:py-24 sm:px-20 ${bgColor}`}>
      <div className="flex flex-col items-center justify-center gap-6 sm:max-w-[1280px] sm:m-auto sm:gap-12 sm:px-8">
        <Button text="About me" />
        <div className="flex flex-col items-center justify-center sm:flex sm:flex-row sm:gap-12">
          <div className="mb-12 w-[343px] h-[380px] sm:min-w-[584px] sm:min-h-[694px] relative flex items-center justify-center sm:items-start sm:justify-start">
            <img
              className="w-[280px] h-[360px] sm:h-[480px] sm:w-[400px] object-cover z-10 border-8 border-gray-50 sm:ml-[50px]"
              src="/profile.png"
              alt=""
            />
            <div
              className={`${boxClassName} w-[320px] h-[360px] sm:w-[400px] sm:h-[480px] absolute z-0 top-7 sm:bottom-0 sm:top-12 sm:left-2`}
            ></div>
          </div>
          <div className="flex flex-col gap-6 ">
            <h3
              className={`${headerColor} text-2xl sm:text-3xl font-semibold`}
            >
              Curious about me? Here you have it:
            </h3>
            <div className="flex flex-col gap-4  ">
              <p>
                I'm a passionate,{" "}
                <span className="underline">self-proclaimed designer</span> who
                specializes in full stack development (React.js & Node.js). I am
                very enthusiastic about bringing the technical and visual
                aspects of digital products to life. User experience, pixel
                perfect design, and writing clear, readable, highly performant
                code matters to me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on{" "}
                <a href="" className="underline">
                  Twitter
                </a>{" "}
                where I share tech-related bites and build in public, or you can
                follow me on{" "}
                <a href="https://github.com/Mnafairy" className="underline">
                  GitHub
                </a>
                .
              </p>
              <p>Finally, some quick bits about me.</p>
              <ul className="list-disc flex flex-row gap-4 sm:gap-8 ml-4">
                <div className="flex flex-col gap-2.5">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <div className="flex flex-col gap-2.5">
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </ul>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
