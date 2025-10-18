import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profile from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-[50px] pt-[140px]">
      {/* Animated background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <BookOpen className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-32 right-20 animate-float-slow opacity-20">
        <GraduationCap className="w-32 h-32 text-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-start grid md:grid-cols-2 gap-5">
        <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-[75px] leading-none  font-extrabold tracking-tight animate-slide-up">
            Welcome to Learn with
            <span className="text-gradient"> Kabeer Kalhoro </span>
          </h1>
          <p className="text-start w-full text-lg md:text-xl text-muted-foreground animate-fade-in max-w-5xl mx-auto">
            {" "}
            Think | Code | Conquer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center animate-scale-in">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={profile} alt="" className="w-4/5 rounded-b-full" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
