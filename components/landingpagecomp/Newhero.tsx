"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MoveDown } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Punit Singh Bisht",
    designation: "Senior Software Engineer",
    image:
      "https://avatars.githubusercontent.com/u/114064992?v=4",
  },
  {
    id: 2,
    name: "Tauseef Ahmad Khan",
    designation: "Product Manager",
    image:
      "/tak.jpeg",
  },
  {
    id: 3,
    name: "Piyush Prajapati",
    designation: "Prompt Engineer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

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
          We build intelligent applications that solve real business problems.
          From custom web development to enterprise AI solutions, we deliver
          technology that drives growth.
        </div>
        <div className="flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center group space-x-2 px-5 py-2"
          >
            <Link
              href={"/"}
              className="relative overflow-hidden px-6 py-3 bg-none text-foreground rounded-lg group h-8 w-30"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
                Get Services <ArrowUpRight />
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Go! Synex <ArrowRight />
              </span>
            </Link>
          </HoverBorderGradient>
        </div>
        <div className="flex flex-row items-center justify-center w-full mt-15">
          <AnimatedTooltip items={people} />
        </div>
        <h1 className="text-xl text-zinc-500 dark:text-zinc-400 ml-2">Meet Our Teams</h1>
        <div className="animate-bounce absolute -bottom-35 bg-background opacity-60 border-2 border-gray-400 py-5 px-2 rounded-full">
          <MoveDown className="size-5 text-foreground " />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Newhero;
