import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Footer,
  Contactme,
  Work,
} from "@/components";
const Portfolio = () => {
  return (
    <div className="sm:max-w-[1440px] sm:m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contactme />
      <Footer />
    </div>
  );
};
export default Portfolio;
