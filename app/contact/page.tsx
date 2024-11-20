"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="mb-8 text-foreground/80">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <ContactForm />
      </motion.div>
    </main>
  );
}
