"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { skills } from "@/lib/data";

type SkillItem = {
  name: string;
  level: number;
  category: string;
};

const categoryColors: Record<string, string> = {
  Frontend: "from-indigo-500 to-blue-500",
  Backend: "from-purple-500 to-indigo-500",
  DevOps: "from-blue-500 to-cyan-500",
  Other: "from-violet-500 to-purple-500",
};

const categoryBg: Record<string, string> = {
  Frontend: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Backend: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  DevOps: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Other: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

function SkillBar({ skill, index }: { skill: SkillItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const barColor = categoryColors[skill.category] || "from-indigo-500 to-blue-500";

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: skill.level + "%" } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className={"h-full rounded-full bg-gradient-to-r " + barColor}
        />
      </div>
    </div>
  );
}

const techIcons = [
  { name: "React", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "Next.js", color: "text-white", bg: "bg-white/10" },
  { name: "TypeScript", color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Node.js", color: "text-green-400", bg: "bg-green-400/10" },
  { name: "Python", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { name: "PostgreSQL", color: "text-sky-400", bg: "bg-sky-400/10" },
  { name: "Docker", color: "text-blue-300", bg: "bg-blue-300/10" },
  { name: "AWS", color: "text-orange-400", bg: "bg-orange-400/10" },
  { name: "GraphQL", color: "text-pink-400", bg: "bg-pink-400/10" },
  { name: "Redis", color: "text-red-400", bg: "bg-red-400/10" },
  { name: "Kubernetes", color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "Terraform", color: "text-purple-400", bg: "bg-purple-400/10" },
];

const categories = ["Frontend", "Backend", "DevOps", "Other"];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Tools &amp; Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated set of technologies I use to build fast, scalable, and maintainable software.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={tech.bg + " " + tech.color + " px-4 py-2 rounded-xl border border-white/10 text-sm font-medium cursor-default transition-all"}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <AnimateOnScroll key={category} delay={catIndex * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-indigo-500/20 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <span className={"px-3 py-1 rounded-lg text-xs font-semibold border " + (categoryBg[category] || "")}>
                    {category}
                  </span>
                </div>
                <div className="space-y-5">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} index={i} />
                    ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
