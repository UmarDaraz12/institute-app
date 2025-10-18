import React from "react";
import ags from "@/assets/AGS-logo.png"; 
import abs from "@/assets/abs-logo.png"; 
import ais from "@/assets/ais-logo.png"; 
import lgs from "@/assets/lgs-logo.png"; 
import taf from "@/assets/taf-logo.png"; 
import tlt from "@/assets/tlt-logo.jpg"; 
import ahs from "@/assets/ahs-logo.jpg"; 
import fgs from "@/assets/fgs-logo.jpg"; 

function TeachingJourney() {
  const logos = [
    { img: ahs, name: "Alpha High School" },
    { img: ags, name: "Alpha Girls School" },
    { img: lgs, name: "Lahore Grammar School" },
    { img: fgs, name: "FGS North Chapter" },
    { img: taf, name: "American Foundation School" },
    { img: abs, name: "Aisha Bawany Academy" },
    { img: ais, name: "Academus International School" },
    { img: tlt, name: "The Learning Tribe" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* ---- Section Header ---- */}
        <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Teaching Journey
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-accent">Learn with Kabeer Kalhoro</span>, 
          I help students explore coding, creativity, and confidence. 
          My teaching journey is all about inspiring learners to think smart, 
          build boldly, and conquer challenges with passion.
        </p>

        {/* ---- Infinite Marquee ---- */}
        <div className="relative flex overflow-hidden py-6 bg-white">
          {/* Loop 1 */}
          <div className="flex animate-marquee">
            {logos.map((item, i) => (
              <div
                key={i}
                className="mx-10 flex flex-col items-center justify-center min-w-[180px]"
              >
              <div className="w-[100px] flex justify-center items-center">
                  <img
                  src={item.img}
                  alt={item.name}
                  className="max-w-full max-h-full shadow-md border border-gray-200"
                />
              </div>
                <p className="mt-3 uppercase text-sm font-semibold text-gray-400 text-center w-[180px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Loop 2 (duplicate for smooth animation) */}
          <div className="flex absolute top-0 animate-marquee2">
            {logos.map((item, i) => (
              <div
                key={i}
                className="mx-10 flex flex-col items-center justify-center min-w-[180px]"
              >
              <div className="w-[100px] flex justify-center items-center">
                  <img
                  src={item.img}
                  alt={item.name}
                  className="max-w-full max-h-full shadow-md border border-gray-200"
                />
              </div>
                <p className="mt-3 uppercase text-sm font-semibold text-gray-400 text-center w-[180px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex overflow-hidden py-6 bg-white mt-6">
          {/* Loop 1 */}
          <div className="flex animate-marquee3">
            {logos.map((item, i) => (
              <div
                key={i}
                className="mx-10 flex flex-col items-center justify-center min-w-[180px]"
              >
              <div className="w-[100px] flex justify-center items-center">
                  <img
                  src={item.img}
                  alt={item.name}
                  className="max-w-full max-h-full shadow-md border border-gray-200"
                />
              </div>
                <p className="mt-3 uppercase text-sm font-semibold text-gray-400 text-center w-[180px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* Loop 2 (duplicate for smooth animation) */}
          <div className="flex absolute top-0 animate-marquee4">
            {logos.map((item, i) => (
              <div
                key={i}
                className="mx-10 flex flex-col items-center justify-center min-w-[180px]"
              >
              <div className="w-[100px] flex justify-center items-center">
                  <img
                  src={item.img}
                  alt={item.name}
                  className="max-w-full max-h-full shadow-md border border-gray-200"
                />
              </div>
                <p className="mt-3 uppercase text-sm font-semibold text-gray-400 text-center w-[180px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeachingJourney;
