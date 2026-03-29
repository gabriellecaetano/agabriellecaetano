import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Volunteer from "@/components/portfolio/Volunteer";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Experience />
      <Skills />
      <Education />
      <Volunteer />
      <Contact />
      <footer className="py-6 text-center font-body text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Gabrielle Caetano
      </footer>
    </div>
  );
};

export default Index;
