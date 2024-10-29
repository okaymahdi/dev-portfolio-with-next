'use client'
import { motion } from 'framer-motion'
import { SparklesCore } from '../ui/sparkles'
// import { TextGenerateEffect } from './TextGenerateEffect'
import { TypewriterText } from './TypewriterText'

export function SparklesText() {
  return (
    <div className="mt-20 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-3xl md:text-5xl lg:text-7xl font-bold text-center relative"
      >
        <TypewriterText />
        Moder UI / UX
      </motion.h1>
      <div className="w-full mx-auto h-40 relative rounded-full">
        {/* Gradients */}
        <div className="absolute inset-x-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />

        <div className="absolute inset-x-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />

        <div className="absolute inset-x-1/2 -translate-x-1/2 top-0 bg-gradient-to-l from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />

        <div className="absolute inset-x-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={600}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full mx-auto  h-full[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}
