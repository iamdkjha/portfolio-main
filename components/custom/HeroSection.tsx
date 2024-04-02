"use client";

import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="md:flex items-center justify-center w-full">
        <div
          className="hero_section pt-[60px] px-5 2xs:h-[100vh] 2xs:flex 2xs:flex-col justify-center 2xs:pt-0 sm:px-10 max-w-[1600px]"
        >

          <div className="mt-3 text-sm text-[#64FFDA] 2xs:text-base 2xs:mt-5 xs:text-lg xs:mt-7 md:text-xl">
            <span className="sm:ml-1">Hi, my name is</span>
          </div>

          <div className="text-3xl font-semibold mt-2 text-[#ccd6f6] 2xs:text-4xl 2xs:mt-3 xs:text-[2.9rem] xs:mt-5 md:text-7xl">
            <span>Diwakar Jha.</span>
          </div>

          <div className="text-2xl font-semibold mt-2 text-[#8892b0] 2xs:text-3xl 2xs:mt-5 xs:text-4xl xs:mt-7 md:text-5xl max-w-[900px]">
            <span>Crafting digital experiences, one pixel at a time.</span>
          </div>

          <div className="text-xs font-semibold mt-2 text-[#8892b0] 2xs:text-sm 2xs:mt-5 xs:text-base xs:mt-7 max-w-[700px] md:text-lg">
            <span>At the intersection of code and creativity, I specialize in crafting exceptional digital experiences. My current focus? Building inclusive, user-centric products at NetcoreInfo Business Services.</span>
          </div>

          <div className="mt-5 2xs:mt-10 xs:mt-7">
            <button className=" border-[#64FFDA] border-[1px] rounded px-5 py-2">
              <span className="text-sm text-[#64FFDA] sm:text-base lg:text-lg">Hire Me</span>
            </button>
          </div>

          <div className="mt-5">
            
          </div>

        </div>
      </section>
    </>
  );
}
