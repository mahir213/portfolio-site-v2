"use client";

import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const highlights = [
  {
    title: "Product Strategy",
    description:
      "Shaping direction with user insights, measurable goals, and steady iteration that drives adoption.",
  },
  {
    title: "Interface Craft",
    description:
      "Design systems, motion, and micro-interactions: orchestrated to feel effortless on every screen size.",
  },
 
];

const stats = [
  { label: "Projects shipped", value: "45+" },
  { label: "Growth uplift", value: "210%" },
  { label: "Client retention", value: "93%" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950/90 py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_58%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(14,116,144,0.16),transparent_45%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p
              className={cn(
                montserrat.className,
                "inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90 backdrop-blur"
              )}
            >
              About
            </p>
            <h2
              className={cn(
                montserrat.className,
                "mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
              )}
            >
              Building experiences that balance polish with measurable impact.
            </h2>
            <p
              className={cn(
                montserrat.className,
                "mt-5 max-w-2xl text-base font-medium text-slate-300 sm:text-lg"
              )}
            >
              I partner with founders, product teams, and agencies to turn complex problems into calm, conversion-focused interfaces. From discovery to delivery, I thread insight, storytelling, and technical craft to create web products people love and businesses trust.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_12px_40px_-18px_rgba(59,130,246,0.65)] transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10"
                >
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.3),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3
                    className={cn(
                      montserrat.className,
                      "text-lg font-semibold text-white"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      montserrat.className,
                      "mt-3 text-sm font-medium leading-relaxed text-slate-200/85"
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_18px_55px_-20px_rgba(8,47,73,0.8)] backdrop-blur-lg">
            <div className="absolute -top-8 right-10 hidden h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl sm:block" />
            <div className="absolute -bottom-10 left-6 hidden h-28 w-28 rounded-full bg-indigo-500/20 blur-3xl sm:block" />
            <p
              className={cn(
                montserrat.className,
                "text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/80"
              )}
            >
              In numbers
            </p>
            <div className="mt-8 grid gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className={cn(
                      montserrat.className,
                      "text-4xl font-semibold text-white"
                    )}
                  >
                    {stat.value}
                  </span>
                  <span
                    className={cn(
                      montserrat.className,
                      "mt-2 text-sm font-medium uppercase tracking-wide text-slate-300/80"
                    )}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <p
              className={cn(
                montserrat.className,
                "mt-8 text-sm font-medium leading-relaxed text-slate-200/80"
              )}
            >
              Beyond the metrics, clients stay for the clarity. Each project ships with documentation, performance baselines, and a roadmap for what is next.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
