import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const PseudoCompilerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-[#eaf7ff] to-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
        <div className="relative w-full lg:w-[55%] rounded-3xl overflow-hidden shadow-lg shadow-blue-100">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/pc.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
        </div>

        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center text-center lg:text-left space-y-6 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] leading-tight">
            Pseudo Compiler -{" "}
            <span className="text-gradient">
              Convert Any Pseudo into Python, Java & VBasic
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
            Whether you're a student starting out in programming or a tech
            enthusiast looking to elevate your skills, we're here to guide you
            on your journey.
          </p>

          <Button
            onClick={() =>
              window.open("https://www.pseudocompiler.com/", "_blank")
            }
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            Visit Pseudo Compiler
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PseudoCompilerSection;
