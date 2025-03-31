import React from "react";
import Particles from "@/src/blocks/Backgrounds/Particles/Particles";

const Hero = () => {
  return (
    <div className="h-[40vh] mt-30 relative w-full overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative -z-10 flex h-full  flex-col items-center justify-center px-4 text-center">
        <div className="mb-2 md:mb-4">
          <h5 className="text-sm font-medium text-black md:text-lg">
            New AI features
          </h5>
        </div>
        <div className="mb-4 md:mb-8">
          <h1 className="text-4xl font-bold text-black md:text-7xl lg:text-8xl">
            Aligno
          </h1>
        </div>
        <div className="max-w-2xl">
          <h3 className="text-sm text-black opacity-90 md:text-xl lg:text-2xl">
            Prioritize What Matters - Streamline Your Workflow and Focus on What
            Drives Success!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
