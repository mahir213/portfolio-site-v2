"use client";

import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Plasma } from "./ui/plasma";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40 bg-background"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <Plasma
          color="#3b82f6"
          speed={0.3}
          direction="forward"
          scale={1.5}
          opacity={0.15}
          mouseInteractive={false}
        />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-gradient-to-br from-sky-400/8 via-indigo-400/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-gradient-to-tr from-indigo-500/6 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-8">
          <p className={cn(montserrat.className, "text-sm uppercase tracking-widest text-muted-foreground font-medium")}>
            About
          </p>
        </div>

        <div className="mb-12">
          <h2
            className={cn(
              montserrat.className,
              "text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-foreground"
            )}
          >
            Started curious. Got better with practice.
          </h2>
        </div>

        <div className="mb-12 border-l-4 border-sky-500/60 pl-6 py-2">
          <p
            className={cn(
              montserrat.className,
              "text-lg sm:text-xl lg:text-2xl font-medium text-muted-foreground italic leading-relaxed"
            )}
          >
            "The only way to do great work is to love what you do."
          </p>
        </div>

        <div className="space-y-6 max-w-3xl">
          <p
            className={cn(
              montserrat.className,
              "text-base sm:text-lg font-medium text-muted-foreground leading-relaxed"
            )}
          >
            I believe in consistent growth and thoughtful execution. I approach challenges as opportunities to improve, simplify, and create meaningful solutions.
          </p>

          <p
            className={cn(
              montserrat.className,
              "text-base sm:text-lg font-medium text-muted-foreground leading-relaxed"
            )}
          >
            As a full-stack developer focused on modern web technologies, I turn complex problems into clear, scalable systems. My stack includes React, Next.js, TypeScript, Node.js, Spring boot, Angular and PHP.
          </p>

          <p
            className={cn(
              montserrat.className,
              "text-base sm:text-lg font-medium text-muted-foreground leading-relaxed"
            )}
          >
            Outside of coding, I enjoy exploring new tools, optimizing workflows, and finding smarter ways to solve problems.
          </p>
        </div>
      </div>
    </section>
  );
}
