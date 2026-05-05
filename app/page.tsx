import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Alex Chen — Full-Stack Engineer",
  description:
    "Full-stack engineer with 5+ years of experience building scalable web applications, developer tools, and open-source projects. Available for new opportunities.",
  openGraph: {
    title: "Alex Chen — Full-Stack Engineer",
    description:
      "Full-stack engineer with 5+ years of experience building scalable web applications and developer tools.",
    url: "https://alexdev.io",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section aria-label="Introduction">
        <Hero />
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section aria-label="About me">
        <About />
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section aria-label="Skills and technologies">
        <Skills />
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section aria-label="Featured projects">
        <Projects />
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section aria-label="Contact">
        <Contact />
      </section>
    </main>
  );
}
