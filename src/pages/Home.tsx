import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";
import PseudoCompilerSection from "@/components/PseudoCompilerSection";
import TeachingJourney from "@/components/TeachingJourney";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <PseudoCompilerSection />
      <Courses />
      <TeachingJourney/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
