"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0f0f] dark:bg-[#0f0f0f] bg-white" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-foreground">Hi, I&apos;m</span>
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Alex Chen
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4 max-w-2xl mx-auto"
        >
          Full-Stack Engineer &amp; Open Source Enthusiast
        </motion.p>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-muted-foreground/70 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          I build scalable web applications, developer tools, and open-source projects that make a difference. 5+ years turning ideas into production-ready software.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => {
              const el = document.querySelector("#projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <a
            href="/resume.pdf"
            className="px-8 py-3.5 rounded-xl border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-foreground font-semibold transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:hello@alexdev.io", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-indigo-500/50 text-muted-foreground hover:text-indigo-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={item}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
