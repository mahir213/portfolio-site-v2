"use client";

import { motion } from "motion/react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { GridDotBackground } from "./ui/grid-dot-background";
import { MacbookScroll } from "./ui/macbook-scroll";
import { TerminalScreen } from "./ui/terminal-screen";
import { montserrat } from "@/lib/fonts";

export default function Hero() {
    const words = [
        "smart",
        "clean",
        "sharp",
        "sleek",
        "fresh",
    ];

    const heroElements = (
        <motion.div
            initial={{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -250px 0px" }}
            className="relative mt-[110px] min-[950px]:mt-[200px] max-w-xl space-y-8"
        >
            <div className="rounded-2xl border border-slate-200/60 bg-white/75 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.18)] backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                <span className={`${montserrat.className} text-[10px] font-semibold uppercase tracking-[0.35em] text-sky-500/80 dark:text-sky-300/70`}>
                    Availability
                </span>
                <h3 className={`${montserrat.className} mt-3 text-lg font-semibold text-slate-900 dark:text-white`}>
                    Currently taking on new projects
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-200/70">
                    I'm available for freelance work and contract positions. Whether you need a quick prototype or a long-term partnership, let's chat about your project.
                </p>
                <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                        <span className={`${montserrat.className} text-[11px] font-medium text-slate-600 dark:text-slate-300`}>
                            Open to opportunities
                        </span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/10 to-indigo-500/10 border border-sky-300/20 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <svg className="h-5 w-5 text-sky-500 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className={`${montserrat.className} text-base font-semibold text-slate-900 dark:text-white`}>
                            Move fast
                        </h4>
                        <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed">
                            Speed matters when you're trying to launch. I get things done quickly without cutting corners, so you can start testing your idea with real users sooner.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400/10 to-purple-500/10 border border-violet-300/20 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <svg className="h-5 w-5 text-violet-500 dark:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </div>
                    <div>
                        <h4 className={`${montserrat.className} text-base font-semibold text-slate-900 dark:text-white`}>
                            End-to-end
                        </h4>
                        <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed">
                            I do both design and dev, which means fewer handoffs and less confusion. What you see in the mockup is what you'll get in the browser, no surprises.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/10 to-teal-500/10 border border-emerald-300/20 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <svg className="h-5 w-5 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div>
                        <h4 className={`${montserrat.className} text-base font-semibold text-slate-900 dark:text-white`}>
                            Time is everything
                        </h4>
                        <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed">
                            Your time matters more than anything. I build sites that load fast and feel responsive because every second counts. No one should wait for your content to appear.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section className="relative w-full overflow-hidden min-h-[940px] sm:min-h-[1000px] lg:min-h-[1120px] xl:min-h-[1200px] 2xl:min-h-[1510px] py-24 sm:py-28 lg:py-32 pb-[calc(10rem-95px)] sm:pb-[calc(12rem-195px)] lg:pb-[calc(14rem-195px)] xl:pb-[calc(16rem-195px)] -mt-2 lg:-mt-16">
            <GridDotBackground className="absolute inset-0" />

            <div className="absolute inset-0 -z-5 flex items-center justify-center pointer-events-none">
                <div className="w-[590px] h-[590px] rounded-full bg-gradient-to-r from-sky-400/20 via-indigo-400/15 to-transparent blur-2xl mt-[-285px] sm:mt-[-335px] lg:mt-[-385px]" />
            </div>

            <div className="relative z-20 max-w-6xl xl:max-w-7xl mx-auto px-6 flex items-center justify-center mt-[80px] min-[950px]:mt-[120px]">
                <div className="w-full flex flex-col min-[950px]:flex-row items-start min-[950px]:items-start gap-10 min-[950px]:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
                    <div className="w-full min-[950px]:w-7/12 xl:w-3/5 flex items-start min-[950px]:justify-start">
                        <div className="w-full max-w-4xl text-left px-2 sm:px-4 min-[950px]:px-0 lg:mt-[40px]" >
                            <h2 className={`${montserrat.className} text-sm uppercase tracking-widest text-muted-foreground font-medium mb-3`}>Full-stack developer</h2>

                              <h1 className={`${montserrat.className} text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-5`}>
                                <div className="block">
                                    I build <span className="inline-block">
                                        <ContainerTextFlip
                                            words={words}
                                            interval={3000}
                                            animationDuration={700}
                                            noContainer
                                            className="inline-block"
                                            textClassName={`${montserrat.className} text-sky-500/90 dark:text-sky-400/80 inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium`}
                                        />
                                    </span> web experiences.
                                </div>
                            </h1>

                            <p className={`${montserrat.className} mt-2 text-base sm:text-lg text-muted-foreground max-w-2xl font-medium`}>
                                I work with startups and product teams to turn ideas into polished web apps. From concept to launch, I handle the design and code so your project actually ships.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 justify-start">
                                <button
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact');
                                        contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className={`${montserrat.className} group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_14px_32px_rgba(59,130,246,0.35)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.45)] cursor-pointer`}
                                >
                                    Contact me
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            {heroElements}
                        </div>
                    </div>

                    <div className="w-full min-[950px]:w-5/12 xl:w-2/5 flex items-center justify-center min-[950px]:justify-end min-[950px]:ml-8 xl:ml-12 2xl:ml-16">
                        <div className="relative max-w-[580px] w-full overflow-visible">
                            <div className="origin-top min-[950px]:origin-bottom-right transform scale-[0.52] min-[400px]:scale-[0.58] sm:scale-[0.64] min-[950px]:scale-[0.8] lg:scale-[0.9] xl:scale-[0.98] 2xl:scale-100 transition-transform duration-300 ease-out">
                                <div className="max-w-full h-auto overflow-visible">
                                    <MacbookScroll
                                        compact
                                        title={null}
                                        showGradient={false}
                                        src=""
                                    >
                                        <TerminalScreen />
                                    </MacbookScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
