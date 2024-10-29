"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl items-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="text-primary">Adam</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 sm:text-xl">
            A passionate developer building amazing web experiences
          </p>
          {/* <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              View Projects
            </a>
          </div> */}
        </motion.div>
        <div className="mt-4"></div>
      </div>
    </section>
  );
}
