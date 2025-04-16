import React from "react";
import ScrollFloat from "@/components/ScrollFloat";
import BlurText from "@/components/BlurText";

const AboutUs = () => {
  return (
    <div className="h-150 w-full flex flex-col justify-center items-center mt-0 bg-background relative">
      <ScrollFloat
        animationDuration={2}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-4xl md:text-6xl font-bold text-foreground text-center"
      >
        What We Do
      </ScrollFloat>
      <h1 className="text-2xl md:text-4xl mx-auto font-medium text-foreground text-center w-4/6 mt-0 mb-12">
        AI & SaaS Development Experts Driving Digital Transformation{" "}
      </h1>
      <h2 className="text-lg md:text-2xl mx-auto text-foreground text-center w-4/7 mt-0 md:mt-8">
        SynexTech is a visionary technology partner empowering businesses with
        AI-driven software development, blockchain innovation, and scalable
        cloud solutions. Discover how we redefine digital success.
      </h2>
    </div>
  );
};

export default AboutUs;
