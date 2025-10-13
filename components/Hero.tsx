"use client";

import { ContainerTextFlip } from "./ui/container-text-flip";
import DottedGlowBackground from "./ui/dotted-glow-background";
import { MacbookScroll } from "./ui/macbook-scroll";
import { montserrat } from "@/lib/fonts";

export default function Hero() {
    const words = [
        "smart",
        "clean",
        "sharp",
        "sleek",
        "fierce",
        "fresh",
    ];

    return (
        <section className="relative w-full overflow-hidden min-h-[690px] sm:min-h-[680px] lg:min-h-[760px] py-16 sm:py-20 lg:py-24 -mt-2 sm:-mt-12 lg:-mt-16">
            {/* dotted animated background with a soft blue glow */}
            <DottedGlowBackground
                className="absolute inset-0 -z-10"
                gap={14}
                radius={2.4}
                color="rgba(146, 146, 146, 0.2)"
                glowColor="rgba(204, 51, 51, 0)"
                darkColor="rgba(113, 108, 138, 0.34)"
                darkGlowColor="rgba(255, 255, 255, 0.81)"
                opacity={0.3}
                speedMin={0.5}
                speedMax={1.2}
            />

            {/* subtle blurred halo to add depth behind the heading */}
            <div className="absolute inset-0 -z-5 flex items-center justify-center pointer-events-none">
                <div className="w-[590px] h-[590px] rounded-full bg-gradient-to-r from-sky-400/20 via-indigo-400/15 to-transparent blur-2xl" />
            </div>

            <div className="relative z-20 max-w-6xl xl:max-w-7xl mx-auto px-6 flex items-center justify-center">
                {/* Responsive layout: horizontal on md+ (text left, macbook right), stacked on small screens */}
                <div className="w-full flex flex-col min-[950px]:flex-row items-center min-[950px]:items-center gap-10 lg:gap-14 xl:gap-40">
                    <div className="w-full min-[950px]:w-3/5 flex items-center min-[950px]:justify-start">
                        <div className="w-full max-w-3xl text-center min-[950px]:text-left px-2 sm:px-4 min-[950px]:px-0">
                            <h2 className={`${montserrat.className} text-sm uppercase tracking-widest text-muted-foreground font-medium mb-3`}>Crafted & Curated</h2>

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

                            <p className={`${montserrat.className} mt-2 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto min-[950px]:mx-0 font-medium`}>
                                Beautiful interfaces, fast interactions and meaningful product thinking - we turn ideas into polished, high-impact digital products.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 justify-center min-[950px]:justify-start">
                                <a
                                    href="#work"
                                    className={`${montserrat.className} group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_14px_32px_rgba(59,130,246,0.35)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(37,99,235,0.45)]`}
                                >
                                    See my work
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                                <a
                                    href="#contact"
                                    className={`${montserrat.className} group inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-6 py-3 font-semibold text-slate-800 shadow-[0_10px_25px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:border-slate-300 hover:shadow-[0_14px_32px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/05 dark:text-slate-100`}
                                >
                                    Let's talk
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/5 text-slate-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-slate-900 dark:bg-white/10 dark:text-slate-100">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full min-[950px]:w-2/5 flex items-center justify-center min-[950px]:justify-end">
                        <div className="max-w-[560px] w-full flex items-center justify-center min-[950px]:justify-end min-[950px]:items-center">
                            <div className="origin-top min-[950px]:origin-bottom-right transform scale-[0.52] min-[400px]:scale-[0.58] sm:scale-[0.64] min-[950px]:scale-[0.74] lg:scale-[0.84] xl:scale-[0.94] 2xl:scale-100 transition-transform duration-300 ease-out min-[950px]:-translate-y-[12.5rem] min-[1100px]:-translate-y-[8rem] min-[1280px]:-translate-y-[5rem] 2xl:-translate-y-[1.875rem]">
                                <div className="max-w-full h-auto overflow-visible">
                                    <MacbookScroll
                                        compact
                                        title={null}
                                        showGradient={false}
                                        src=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
