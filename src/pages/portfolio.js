import { Header, Hero, About, Skills,Experience } from "@/components";
const Portfolio = () => {
  return (
    <div className="sm:max-w-[1440px] sm:m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience/>
    </div>
  );
};
export default Portfolio;
