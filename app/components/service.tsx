// app/services/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CircleSmall } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ServiceItem {
    question: string;
    answer: {
        text: string;
        points: string[];
    };
    image?: {
        src: string;
        alt: string;
    };
}

export default function ServicesPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    
    // Refs for animations
    const pageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
        
        // Animate the expanded content
        if (openIndex !== index) {
            const content = document.getElementById(`service-content-${index}`);
            if (content) {
                gsap.fromTo(content,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );
            }
        }
    };

    // Initialize animations
    useEffect(() => {
        // Make sure everything is visible first
        gsap.set([titleRef.current, ...serviceRefs.current.filter(Boolean)], {
            opacity: 1,
            y: 0
        });

        const ctx = gsap.context(() => {
            // Fade in title from below
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

            // Animate each service item on scroll
            serviceRefs.current.forEach((ref, index) => {
                if (!ref) return;
                
                gsap.from(ref, {
                    scrollTrigger: {
                        trigger: ref,
                        start: "top 85%",
                        end: "bottom 20%",
                        toggleActions: "play none none none"
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    const services: ServiceItem[] = [
        {
            question: "Web Development",
            answer: {
                text: "We build modern, responsive websites using the latest technologies optimized for performance, SEO, and user experience.",
                points: [
                    "React.js",
                    "Next.js",
                    "Vue.js",
                    "Nuxt.js",
                    "Angular",
                    "Svelte",
                    "TypeScript",
                    "JavaScript",
                    "TailwindCSS",
                    "CSS/SCSS",
                    "HTML5",
                    "Redux",
                    "Zustand",
                    "Framer",
                    "GSAP",
                    "Three.js",
                    "Shadcn UI",
                    "Material UI",
                    "Chakra UI",
                    "Radix UI",
                    "Storybook",
                    "Vite",
                    "Webpack",
                    "PWA"
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
                points: [
                    "React Native",
                    "Flutter",
                    "Swift",
                    "Kotlin",
                    "iOS & Android",
                    "Expo"
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
                points: [
                    "Wireframes",
                    "Prototypes",
                    "User Research",
                    "UI Design",
                    "UX Strategy",
                    "Design Systems"
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
                points: [
                    "SEO",
                    "Social Media",
                    "Content Marketing",
                    "Email Campaigns",
                    "Analytics",
                    "PPC Advertising"
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
                points: [
                    "AWS",
                    "Google Cloud",
                    "Azure",
                    "Docker",
                    "Kubernetes",
                    "Cloud Migration"
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
                points: [
                    "Chatbots",
                    "Recommendation Engines",
                    "Predictive Analytics",
                    "OpenAI",
                    "LangChain",
                    "TensorFlow"
                ]
            },
            image: {
                src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop",
                alt: "AI & Machine Learning"
            }
        }
    ];

    return (
        <main ref={pageRef} className="min-h-screen relative overflow-x-hidden bg-white">
            {/* Main content */}
            <div className="relative z-10 mx-auto px-4 py-16 md:py-24">
                <h1 
                    ref={titleRef}
                    className="text-7xl md:text-8xl lg:text-9xl font-thin tracking-tighter mb-16"
                >
                    Services
                </h1>

                <div className="grid grid-cols-1 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={el => { serviceRefs.current[index] = el; }}
                            className="group border-t border-black/20"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-4 sm:px-6 py-6 text-left flex justify-between items-center gap-4 transition-all duration-200 hover:bg-gray-50/50"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">
                                    {service.question}
                                </span>
                                <span
                                    className={`transform transition-all duration-300 flex items-center justify-center ${
                                        openIndex === index ? "rotate-180" : ""
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
                                className={`transition-all duration-500 ease-in-out ${
                                    openIndex === index ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
                                } overflow-hidden`}
                            >
                                <div className="px-4 sm:px-6 pb-6 space-y-6 md:space-y-0 md:flex md:gap-8 lg:gap-12 xl:gap-16 md:items-start">
                                    {/* Image */}
                                    {service.image && (
                                        <div 
                                            className="service-image relative w-full md:w-80 lg:w-96 xl:w-125 2xl:w-150 h-64 md:h-56 lg:h-64 xl:h-80 2xl:h-96 shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                                        >
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
                                    <div className="flex-1">
                                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium mb-4">
                                            {service.answer.text}
                                        </p>
                                        <p className="text-base sm:text-lg md:text-xl font-medium mb-3">
                                            Technologies we trust in:
                                        </p>

                                        {/* Responsive grid for points */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
                                            {service.answer.points.map((point, i) => (
                                                <div 
                                                    key={i} 
                                                    className="flex items-start gap-2 text-sm sm:text-base md:text-lg"
                                                >
                                                    <span className="text-black mt-1 shrink-0">
                                                        <CircleSmall strokeWidth={1} fill="black" size={14} />
                                                    </span>
                                                    <span className="font-light leading-tight">{point}</span>
                                                </div>
                                            ))}
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
        </main>
    );
}