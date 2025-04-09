"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MoveDown } from "lucide-react";

import { cn } from "@/lib/utils";



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
        Get Your First Landing Page Free Boost Conversions with AI-Driven Design
        </div>
        <div className="font-extralight text-base text-center md:text-2xl dark:text-neutral-200 py-4 w-3/4">
        Launch Your SEO-Optimized, High-Converting Landing Page in 7 Days - <b>Zero Cost, 100% Results-Driven</b>
        </div>
        <div className="flex justify-center text-center">
        
          <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] bg-zinc-200 dark:bg-zinc-800 ">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
            <Link
              href={"https://cal.com/synextech"}
              className="relative overflow-hidden px-2 py-3 bg-none text-foreground rounded-lg group h-8 w-35"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-full">
              Claim Free Page <ArrowUpRight />
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                Go! Synex <ArrowRight />
              </span>
            </Link>
            </div>
        </div>
        <div className="animate-bounce absolute -bottom-35 bg-background opacity-60 border-2 border-gray-400 py-5 px-2 rounded-full">
          <MoveDown className="size-5 text-foreground " />
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Newhero;
