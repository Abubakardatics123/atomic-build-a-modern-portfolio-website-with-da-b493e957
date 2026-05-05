"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Terminal, ArrowUp, Heart } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 bg-white/2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center group-hover:bg-indigo-400 transition-colors">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                alex<span className="text-indigo-400">.dev</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Full-stack engineer building scalable web applications and developer tools. Open to new opportunities.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                { href: "mailto:hello@alexdev.io", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@alexdev.io" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@alexdev.io
                </a>
              </li>
              <li className="text-sm text-muted-foreground">San Francisco, CA</li>
              <li>
                <a href="/resume.pdf" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            {" "}using Next.js, TypeScript &amp; Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-colors z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
}
