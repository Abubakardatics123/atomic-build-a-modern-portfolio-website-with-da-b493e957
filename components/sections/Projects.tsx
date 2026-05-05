"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, categories } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Projects</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Things I&apos;ve Built
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I&apos;m proud of — from side experiments to production systems.
          </p>
        </AnimateOnScroll>

        {/* Filter tabs */}
        <AnimateOnScroll className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground hover:border-white/20",
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </AnimateOnScroll>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all link */}
        <AnimateOnScroll className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-indigo-500/30 text-foreground font-medium transition-all duration-200 hover:-translate-y-0.5 group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
