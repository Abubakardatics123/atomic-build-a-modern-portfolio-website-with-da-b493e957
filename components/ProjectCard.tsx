"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-500/90 text-white text-xs font-semibold">
            Featured
          </div>
        )}

        {/* Year badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/70 text-xs">
          {project.year}
        </div>

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              aria-label="GitHub repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground bg-white/5 border border-white/10 px-2 py-1 rounded-md">
            {project.category}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <Link
          href={"/projects/" + project.slug}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/link"
        >
          View Details
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
