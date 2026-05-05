"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectDetailProps {
  project: Project;
  relatedProjects: Project[];
}

export function ProjectDetail({ project, relatedProjects }: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden mb-8 border border-white/10"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-indigo-500/90 text-white text-sm font-semibold">
              Featured Project
            </div>
          )}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  {project.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-foreground text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Long description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Tech stack */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 text-muted-foreground border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.repoUrl) && (
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
