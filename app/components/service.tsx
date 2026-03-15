// app/services/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import {
    // Web Development Icons
    Code2,
    Globe,
    Box,
    Component,
    Cpu,
    Layout,
    Palette,
    Smartphone,
    Gauge,
    Zap,
    Braces,
    FileJson,
    Paintbrush,
    Waves,
    Workflow,
    Sparkles,
    GalleryVerticalEnd,
    AppWindow,
    PanelsTopLeft,
    Puzzle,
    BookOpen,
    Rocket,
    Wrench,
    FolderTree,
    // Mobile Icons
    TabletSmartphone,
    FlaskConical,
    Apple,
    Smartphone as AndroidIcon,
    Timer,
    // UI/UX Icons
    PenTool,
    PencilRuler,
    Eye,
    MousePointer,
    // Marketing Icons
    TrendingUp,
    BarChart3,
    Mail,
    Search,
    Target,
    // Cloud Icons
    Cloud,
    Server,
    HardDrive,
    Network,
    Shield,
    Database,
    // AI Icons
    Brain,
    Bot,
    Sparkles as AiSparkles,
    GitBranch,
    Workflow as AiWorkflow,
} from "lucide-react";

interface IconItem {
    icon: React.ElementType;
    name: string;
    borderGradient: string;
    bgGradient: string;
}

interface ServiceItem {
    question: string;
    answer: {
        text: string;
        icons: IconItem[];
    };
    image?: {
        src: string;
        alt: string;
    };
}

export default function ServicesPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Gradient combinations
    const gradients = [
        {
            border: "bg-[linear-gradient(90deg,#0040FF_0%,#B7E5F9_100%)]",
            bg: "bg-[linear-gradient(90deg,#3E6EFF_0%,#20BCFF_100%)]"
        },
        {
            border: "bg-[linear-gradient(90deg,#FF416C_0%,#FF4B2B_100%)]",
            bg: "bg-[linear-gradient(90deg,#FF4B2B_0%,#FF416C_100%)]"
        },
        {
            border: "bg-[linear-gradient(90deg,#11998e_0%,#38ef7d_100%)]",
            bg: "bg-[linear-gradient(90deg,#38ef7d_0%,#11998e_100%)]"
        },
        {
            border: "bg-[linear-gradient(90deg,#8E2DE2_0%,#4A00E0_100%)]",
            bg: "bg-[linear-gradient(90deg,#4A00E0_0%,#8E2DE2_100%)]"
        },
        {
            border: "bg-[linear-gradient(90deg,#F2994A_0%,#F2C94C_100%)]",
            bg: "bg-[linear-gradient(90deg,#F2C94C_0%,#F2994A_100%)]"
        },
        {
            border: "bg-[linear-gradient(90deg,#56CCF2_0%,#2F80ED_100%)]",
            bg: "bg-[linear-gradient(90deg,#2F80ED_0%,#56CCF2_100%)]"
        },
        {
            border: "bg-[linear-gradient(90deg,#DD5E89_0%,#F7BB97_100%)]",
            bg: "bg-[linear-gradient(90deg,#F7BB97_0%,#DD5E89_100%)]"
        },
        {
            border: "bg-[linear-gradient(90deg,#4776E6_0%,#8E54E9_100%)]",
            bg: "bg-[linear-gradient(90deg,#8E54E9_0%,#4776E6_100%)]"
        }
    ];

    const services: ServiceItem[] = [
        {
            question: "Web Development",
            answer: {
                text: "We build modern, responsive websites using the latest technologies optimized for performance, SEO, and user experience.",
                icons: [
                    { icon: Code2, name: "React.js", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: Globe, name: "Next.js", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: Box, name: "Vue.js", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: Component, name: "Nuxt.js", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: Cpu, name: "Angular", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: Layout, name: "Svelte", borderGradient: gradients[5].border, bgGradient: gradients[5].bg },
                    { icon: Braces, name: "TypeScript", borderGradient: gradients[6].border, bgGradient: gradients[6].bg },
                    { icon: FileJson, name: "JavaScript", borderGradient: gradients[7].border, bgGradient: gradients[7].bg },
                    { icon: Palette, name: "TailwindCSS", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: Paintbrush, name: "CSS/SCSS", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: Smartphone, name: "HTML5", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: Workflow, name: "Redux", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: Waves, name: "Zustand", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: Sparkles, name: "Framer", borderGradient: gradients[5].border, bgGradient: gradients[5].bg },
                    { icon: Zap, name: "GSAP", borderGradient: gradients[6].border, bgGradient: gradients[6].bg },
                    { icon: GalleryVerticalEnd, name: "Three.js", borderGradient: gradients[7].border, bgGradient: gradients[7].bg },
                    { icon: AppWindow, name: "Shadcn UI", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: PanelsTopLeft, name: "Material UI", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: Puzzle, name: "Chakra UI", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: Layout, name: "Radix UI", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: BookOpen, name: "Storybook", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: Rocket, name: "Vite", borderGradient: gradients[5].border, bgGradient: gradients[5].bg },
                    { icon: Wrench, name: "Webpack", borderGradient: gradients[6].border, bgGradient: gradients[6].bg },
                    { icon: FolderTree, name: "PWA", borderGradient: gradients[7].border, bgGradient: gradients[7].bg }
                ]
            },
            image: {
                src: "/webdev.png",
                alt: "Web Development"
            }
        },
        {
            question: "Mobile App Development",
            answer: {
                text: "Native and cross-platform mobile applications for iOS and Android. We use React Native and Flutter to deliver high-quality apps with smooth performance and beautiful interfaces.",
                icons: [
                    { icon: TabletSmartphone, name: "React Native", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: FlaskConical, name: "Flutter", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: Apple, name: "Swift", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: AndroidIcon, name: "Kotlin", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: Apple, name: "iOS", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: AndroidIcon, name: "Android", borderGradient: gradients[5].border, bgGradient: gradients[5].bg },
                    { icon: Timer, name: "Expo", borderGradient: gradients[6].border, bgGradient: gradients[6].bg }
                ]
            },
            image: {
                src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
                alt: "Mobile App Development"
            }
        },
        {
            question: "UI/UX Design",
            answer: {
                text: "User-centered design that focuses on creating intuitive, beautiful interfaces. We handle everything from wireframes to high-fidelity prototypes.",
                icons: [
                    { icon: PenTool, name: "Figma", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: PencilRuler, name: "Sketch", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: Eye, name: "Adobe XD", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: MousePointer, name: "InVision", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: Layout, name: "Miro", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: Palette, name: "Zeplin", borderGradient: gradients[5].border, bgGradient: gradients[5].bg }
                ]
            },
            image: {
                src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
                alt: "UI/UX Design"
            }
        },
        {
            question: "Digital Marketing",
            answer: {
                text: "Comprehensive digital marketing strategies including SEO, social media, and content marketing to help your business grow online.",
                icons: [
                    { icon: TrendingUp, name: "Google Analytics", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: Search, name: "SEMrush", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: Target, name: "HubSpot", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: Mail, name: "Mailchimp", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: BarChart3, name: "Ahrefs", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: Gauge, name: "Moz", borderGradient: gradients[5].border, bgGradient: gradients[5].bg }
                ]
            },
            image: {
                src: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop",
                alt: "Digital Marketing"
            }
        },
        {
            question: "Cloud Services",
            answer: {
                text: "Scalable cloud solutions on AWS, Google Cloud, and Azure. We help you migrate, manage, and optimize your infrastructure.",
                icons: [
                    { icon: Cloud, name: "AWS", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: Globe, name: "Google Cloud", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: Server, name: "Azure", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: HardDrive, name: "Docker", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: Network, name: "Kubernetes", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: Shield, name: "Terraform", borderGradient: gradients[5].border, bgGradient: gradients[5].bg }
                ]
            },
            image: {
                src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
                alt: "Cloud Services"
            }
        },
        {
            question: "AI & Machine Learning",
            answer: {
                text: "Custom AI solutions including chatbots, recommendation engines, and predictive analytics to give your business a competitive edge.",
                icons: [
                    { icon: Bot, name: "OpenAI", borderGradient: gradients[0].border, bgGradient: gradients[0].bg },
                    { icon: Brain, name: "TensorFlow", borderGradient: gradients[1].border, bgGradient: gradients[1].bg },
                    { icon: GitBranch, name: "PyTorch", borderGradient: gradients[2].border, bgGradient: gradients[2].bg },
                    { icon: AiWorkflow, name: "LangChain", borderGradient: gradients[3].border, bgGradient: gradients[3].bg },
                    { icon: AiSparkles, name: "Hugging Face", borderGradient: gradients[4].border, bgGradient: gradients[4].bg },
                    { icon: Database, name: "Pinecone", borderGradient: gradients[5].border, bgGradient: gradients[5].bg }
                ]
            },
            image: {
                src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop",
                alt: "AI & Machine Learning"
            }
        }
    ];

    return (
        <main className="min-h-screen relative overflow-x-hidden">
            {/* Main content */}
            <div className="relative z-10 mx-auto px-4 py-16 md:py-24">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin tracking-tighter mb-16">
                    Services
                </h1>

                <div className="grid grid-cols-1 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group border-t border-black/20"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 sm:px-6 py-6 text-left flex justify-between items-center gap-4 transition-all duration-200"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
                                    {service.question}
                                </span>
                                <span
                                    className={`transform transition-all duration-300 flex items-center justify-center ${openIndex === index ? "-rotate-50" : ""
                                        }`}
                                >
                                    <img
                                        src="/arrow.png"
                                        alt="arrow"
                                        className="w-8 sm:w-12 md:w-16 lg:w-24 h-auto"
                                    />
                                </span>
                            </button>

                            <div
                                id={`service-content-${index}`}
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                            >
                                <div className="px-4 sm:px-6 pb-6 space-y-6 md:space-y-0 md:flex md:gap-8 lg:gap-12 xl:gap-16 md:items-start">
                                    {/* Image */}
                                    {service.image && (
                                        <div className="service-image relative w-full md:w-80 lg:w-96 xl:w-125 2xl:w-150 h-64 md:h-56 lg:h-64 xl:h-80 2xl:h-96 shrink-0 rounded-2xl overflow-hidden cursor-pointer">
                                            <Image
                                                src={service.image.src}
                                                alt={service.image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 500px"
                                            />
                                        </div>
                                    )}

                                    {/* Text */}
                                    <div className="flex-1 w-auto sm:w-100">
                                        <p className="text-lg sm:text-xl md:text-4xl leading-normal font-medium mb-4">
                                            {service.answer.text}
                                        </p>
                                        <p className="text-base sm:text-lg md:text-xl font-medium mb-4">
                                            Technologies we trust in:
                                        </p>

                                        {/* CSS Marquee with Fade Edges */}
                                        <div className="marquee-container">
                                            {/* Left Fade */}
                                            <div className="marquee-fade-left"></div>

                                            {/* Right Fade */}
                                            <div className="marquee-fade-right"></div>

                                            {/* Scrolling Content */}
                                            <div className="marquee-content">
                                                {service.question === "Web Development" ? (
                                                    // Dual marquee for Web Development
                                                    <>
                                                        {/* First marquee - moves right to left */}
                                                        <div className="marquee-track-right-to-left">
                                                            {[...service.answer.icons, ...service.answer.icons].map((item, i) => {
                                                                const IconComponent = item.icon;
                                                                return (
                                                                    <div
                                                                        key={`right-left-${i}`}
                                                                        className={` rounded-full p-1 ${item.borderGradient}`} >
                                                                        <div className={`flex items-center gap-0 rounded-full pr-3 ${item.bgGradient}`}>
                                                                            <div className="bg-[#f9f9f9] h-10 w-20 rounded-full ml-2 blur-xl absolute z-0"></div>
                                                                            <div className="marquee-icon-wrapper z-10">
                                                                                <IconComponent
                                                                                    size={32}
                                                                                    strokeWidth={1.5}
                                                                                    className="text-white"
                                                                                />
                                                                            </div>
                                                                            <span className=" text-white font-semibold z-10">
                                                                                {item.name}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                        
                                                        {/* Second marquee - moves left to right */}
                                                        <div className="marquee-track-left-to-right">
                                                            {[...service.answer.icons, ...service.answer.icons].map((item, i) => {
                                                                const IconComponent = item.icon;
                                                                return (
                                                                    <div
                                                                        key={`left-right-${i}`}
                                                                        className={` rounded-full p-1 ${item.borderGradient}`}
                                                                    >
                                                                        <div className={`flex items-center gap-2 rounded-full pr-3 ${item.bgGradient}`}>
                                                                            <div className="bg-[#f9f9f9] h-10 w-20 rounded-full ml-2 blur-xl absolute z-0"></div>
                                                                            <div className="marquee-icon-wrapper z-10">
                                                                                <IconComponent
                                                                                    size={32}
                                                                                    strokeWidth={1.5}
                                                                                    className="text-white"
                                                                                />
                                                                            </div>
                                                                            <span className="marquee-item-label text-white font-semibold z-10">
                                                                                {item.name}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </>
                                                ) : (
                                                    // Single marquee for other services
                                                    <div className="marquee-track">
                                                        {[...service.answer.icons, ...service.answer.icons].map((item, i) => {
                                                            const IconComponent = item.icon;
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    className={` rounded-full p-1 ${item.borderGradient}`}
                                                                >
                                                                    <div className={`flex items-center gap-2 rounded-full pr-3 ${item.bgGradient}`}>
                                                                        <div className="bg-[#f9f9f9] h-10 w-20 rounded-full ml-2 blur-xl absolute z-0"></div>
                                                                        <div className="marquee-icon-wrapper z-10">
                                                                            <IconComponent
                                                                                size={32}
                                                                                strokeWidth={1.5}
                                                                                className="text-white"
                                                                            />
                                                                        </div>
                                                                        <span className="marquee-item-label text-white font-semibold z-10">
                                                                            {item.name}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom blur */}
            <div
                className="fixed bottom-0 left-0 w-full h-32 sm:h-40 md:h-50 pointer-events-none z-40"
                style={{
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    background: "rgba(255, 255, 255, 0.03)",
                    maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 100%)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
            >
                <div
                    className="absolute inset-0 opacity-[0.02] mix-blend-soft-light pointer-events-none"
                    style={{
                        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                        backgroundSize: "cover"
                    }}
                />
            </div>

            {/* Add CSS for marquee */}
            <style jsx>{`
                .marquee-container {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    padding: 1rem 0;
                }

                .marquee-fade-left {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 80px;
                    background: linear-gradient(to right, white, transparent);
                    z-index: 10;
                    pointer-events: none;
                }

                .marquee-fade-right {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 80px;
                    background: linear-gradient(to left, white, transparent);
                    z-index: 10;
                    pointer-events: none;
                }

                .marquee-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    overflow: hidden;
                    white-space: nowrap;
                }

                .marquee-track {
                    display: flex;
                    gap: 1.5rem;
                    animation: marqueeRightToLeft 30s linear infinite;
                    min-width: 200%;
                }

                .marquee-track-right-to-left {
                    display: flex;
                    gap: 1.5rem;
                    animation: marqueeRightToLeft 35s linear infinite;
                    min-width: 200%;
                }

                .marquee-track-left-to-right {
                    display: flex;
                    gap: 1.5rem;
                    animation: marqueeLeftToRight 35s linear infinite;
                    min-width: 200%;
                }

                .marquee-icon-wrapper {
                    width: 56px;
                    height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                }

                .marquee-item-label {
                    text-align: center;
                }

                @keyframes marqueeRightToLeft {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes marqueeLeftToRight {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                /* Dark mode support */
                @media (prefers-color-scheme: dark) {
                    .marquee-fade-left {
                        background: linear-gradient(to right, #E9E9E9, transparent);
                    }
                    .marquee-fade-right {
                        background: linear-gradient(to left, #E9E9E9, transparent);
                    }
                }
            `}</style>
        </main>
    );
}