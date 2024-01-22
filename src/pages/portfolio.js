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
      <section id="section">
        <About />
      </section>
      <Skills />
      <section id="section3">
        <Experience />
      </section>
      <section id="section2">
        <Work />
      </section>
      <section id="section4">
        <Contactme />
      </section>
      <Footer />
    </div>
  );
};
export default Portfolio;
