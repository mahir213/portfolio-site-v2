"use client";

import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Aurora from "./Aurora";
import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-background"
    >
      <div className="absolute inset-0 z-0 w-full h-full opacity-20">
        <Aurora 
          colorStops={['#5227FF', '#00D4FF', '#7C3AED']}
          amplitude={0.4}
          blend={0.3}
          speed={isMobile ? 0.4 : 0.8}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-8">
          <p className={cn(montserrat.className, "text-sm uppercase tracking-widest text-muted-foreground font-medium")}>
            Get in touch
          </p>
        </div>

        <div className="mb-12">
          <h2
            className={cn(
              montserrat.className,
              "text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-foreground"
            )}
          >
            Let's build something great together.
          </h2>
        </div>

        <div className="max-w-2xl">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={cn(
                    montserrat.className,
                    "block text-sm font-semibold text-foreground mb-2"
                  )}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    montserrat.className,
                    "w-full px-4 py-3 rounded-xl border border-slate-200/60 bg-white/75 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all dark:border-white/10 dark:bg-white/10 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  )}
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={cn(
                    montserrat.className,
                    "block text-sm font-semibold text-foreground mb-2"
                  )}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    montserrat.className,
                    "w-full px-4 py-3 rounded-xl border border-slate-200/60 bg-white/75 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all dark:border-white/10 dark:bg-white/10 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  )}
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={cn(
                    montserrat.className,
                    "block text-sm font-semibold text-foreground mb-2"
                  )}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    montserrat.className,
                    "w-full px-4 py-3 rounded-xl border border-slate-200/60 bg-white/75 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 transition-all resize-none dark:border-white/10 dark:bg-white/10 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  )}
                  placeholder="Tell me about your idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitStatus.type === 'success'}
                className={cn(
                  montserrat.className,
                  "group inline-flex items-center gap-3 rounded-full px-8 py-4 font-semibold text-white shadow-[0_14px_32px_rgba(59,130,246,0.35)] transition-all duration-500 disabled:cursor-not-allowed overflow-hidden relative",
                  submitStatus.type === 'success'
                    ? "bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 shadow-[0_14px_32px_rgba(16,185,129,0.35)]"
                    : "bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:shadow-[0_18px_40px_rgba(37,99,235,0.45)]",
                  isSubmitting && "opacity-75"
                )}
              >
                <span className={cn(
                  "transition-all duration-500",
                  submitStatus.type === 'success' ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
                )}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <span className={cn(
                  "absolute left-1/2 -translate-x-1/2 transition-all duration-500",
                  submitStatus.type === 'success' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}>
                  Message Sent!
                </span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-500 group-hover:translate-x-1">
                  {isSubmitting ? (
                    <svg className="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : submitStatus.type === 'success' ? (
                    <svg className="h-4 w-4 animate-[scale-in_0.3s_ease-out]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6L8 14L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </button>

              {submitStatus.type === 'error' && (
                <div
                  className={cn(
                    montserrat.className,
                    "mt-4 p-4 rounded-xl border bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
                  )}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
