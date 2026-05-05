"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { submitContact } from "@/app/actions/contact";
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@alexdev.io", href: "mailto:hello@alexdev.io" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: null },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [resultMsg, setResultMsg] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const result = await submitContact(form);
      if (result.success) {
        setStatus("success");
        setResultMsg(result.message);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResultMsg(result.message);
      }
    } catch {
      setStatus("error");
      setResultMsg("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClass = (field: string) =>
    "w-full px-4 py-3 rounded-xl bg-white/5 border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all " +
    (errors[field] ? "border-red-500/50 focus:border-red-500/50" : "border-white/10 focus:border-indigo-500/50");

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <AnimateOnScroll direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-foreground mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium text-foreground hover:text-indigo-400 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-medium text-foreground">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for Work</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently open to senior engineering roles and interesting freelance projects.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Form */}
          <AnimateOnScroll direction="right" delay={0.1} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">{resultMsg}</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={inputClass("name")}
                          disabled={status === "loading"}
                        />
                        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClass("email")}
                          disabled={status === "loading"}
                        />
                        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry, collaboration..."
                        className={inputClass("subject")}
                        disabled={status === "loading"}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        className={inputClass("message") + " resize-none"}
                        disabled={status === "loading"}
                      />
                      {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {resultMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25"
                    >
                      {status === "loading" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
