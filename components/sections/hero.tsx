"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl items-center px-4 sm:px-6">
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-primary">Adam</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-foreground/80">
            I just want to <span className="text-primary">help</span> people, <span className="text-primary">solve</span> problems, and <span className="text-primary">learn</span> new things. Let's work together!
          </p>
        </motion.div>
        <div className="mt-4"></div>
      </div>
    </section>
  );
}
