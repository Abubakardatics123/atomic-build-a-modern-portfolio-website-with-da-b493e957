"use client";

import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap, Coffee, Code } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+", icon: Briefcase },
  { label: "Projects Shipped", value: "40+", icon: Code },
  { label: "Cups of Coffee", value: "∞", icon: Coffee },
  { label: "Open Source Contributions", value: "200+", icon: GraduationCap },
];

const timeline = [
  {
    year: "2024",
    role: "Senior Full-Stack Engineer",
    company: "TechCorp Inc.",
    description: "Leading development of AI-powered analytics platform serving 50k+ users.",
  },
  {
    year: "2022",
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    description: "Built and scaled e-commerce platform from 0 to $2M ARR.",
  },
  {
    year: "2020",
    role: "Frontend Developer",
    company: "Digital Agency",
    description: "Delivered 20+ client projects across fintech, healthcare, and retail.",
  },
  {
    year: "2019",
    role: "B.Sc. Computer Science",
    company: "MIT",
    description: "Graduated with honors, specializing in distributed systems.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Crafting Digital Experiences
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about building software that solves real problems and delights users.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Photo + Bio */}
          <AnimateOnScroll direction="left">
            <div className="space-y-6">
              {/* Profile card */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur group-hover:opacity-30 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <img
                    src="/images/developer-profile-portrait.jpg"
                    alt="Alex Chen - Full Stack Developer"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center hover:border-indigo-500/30 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Bio + Timeline */}
          <AnimateOnScroll direction="right" delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Hey there! 👋
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m Alex, a full-stack engineer with 5+ years of experience building products that scale. I specialize in React, Next.js, Node.js, and cloud infrastructure — but I&apos;m always learning new tools to solve problems better.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me contributing to open source, writing technical articles, or exploring the latest in AI/ML. I believe great software is built at the intersection of technical excellence and thoughtful design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m currently open to senior engineering roles and interesting freelance projects. Let&apos;s build something amazing together.
                </p>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  Experience &amp; Education
                </h3>
                <div className="space-y-4 relative">
                  <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 to-transparent" />
                  {timeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="pl-10 relative"
                    >
                      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-indigo-500 bg-background flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-indigo-500/30 transition-colors">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <div className="font-semibold text-foreground text-sm">{item.role}</div>
                            <div className="text-indigo-400 text-sm">{item.company}</div>
                          </div>
                          <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded-md shrink-0">{item.year}</span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
