import { cn } from '@/lib/utils'
import { AnimatedShinyText } from '@/src/components/magicui/animated-shiny-text'
import { SparklesText } from '@/src/components/magicui/sparkles-text'
import React from 'react'

const Process = () => {
  return (
    <section className='h-200 w-full flex flex-col justify-center items-center bg-background gap-10'>
      <div
        className={cn(
          "group rounded-full border border-black/20 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>Process</span>
        </AnimatedShinyText>
      </div>
      <SparklesText text="Your Roadmap to Digital Excellence" className='text-2xl md:text-4xl font-bold text-foreground'/>
    </section>
  )
}

export default Process
