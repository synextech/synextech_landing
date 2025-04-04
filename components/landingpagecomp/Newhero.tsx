"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

const Newhero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-4/5"
      >
        
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Transform Your Business with AI-Powered Solutions
        </div>
        <div className="font-extralight text-base text-center md:text-2xl dark:text-neutral-200 py-4 w-3/4">
        We build intelligent applications that solve real business problems. From custom web development to enterprise AI solutions, we deliver technology that drives growth.
        </div>
        <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-5 py-2"
      >
        <Link href={"/"}>Aceternity UI</Link>
      </HoverBorderGradient>
    </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Newhero;
