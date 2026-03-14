// app/services/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface ServiceItem {
    question: string;
    answer: string;
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

    const services: ServiceItem[] = [
        {
            question: "Web Development",
            answer: "We build modern, responsive websites using the latest technologies like React, Next.js, and TailwindCSS. Our sites are optimized for performance, SEO, and user experience. From simple landing pages to complex web applications, we deliver scalable solutions that grow with your business.",
            image: {
                src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop",
                alt: "Web Development"
            }
        },
        {
            question: "Mobile App Development",
            answer: "Native and cross-platform mobile applications for iOS and Android. We use React Native and Flutter to deliver high-quality apps with smooth performance and beautiful interfaces. Your users will love the experience across all devices.",
            image: {
                src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
                alt: "Mobile App Development"
            }
        },
        {
            question: "UI/UX Design",
            answer: "User-centered design that focuses on creating intuitive, beautiful interfaces. We handle everything from wireframes to high-fidelity prototypes, ensuring your product is not only visually stunning but also a joy to use.",
            image: {
                src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
                alt: "UI/UX Design"
            }
        },
        {
            question: "Digital Marketing",
            answer: "Comprehensive digital marketing strategies including SEO, social media, and content marketing to help your business grow online. We analyze data and optimize campaigns to maximize your ROI.",
            image: {
                src: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop",
                alt: "Digital Marketing"
            }
        },
        {
            question: "Cloud Services",
            answer: "Scalable cloud solutions on AWS, Google Cloud, and Azure. We help you migrate, manage, and optimize your infrastructure for better performance, security, and cost efficiency.",
            image: {
                src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
                alt: "Cloud Services"
            }
        },
        {
            question: "AI & Machine Learning",
            answer: "Custom AI solutions including chatbots, recommendation engines, and predictive analytics to give your business a competitive edge. We turn your data into actionable insights.",
            image: {
                src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop",
                alt: "AI & Machine Learning"
            }
        }
    ];

    return (
        <main className="min-h-screen relative">
            {/* Main content */}
            <div className="relative z-10 mx-auto px-4 py-16 md:py-24">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin tracking-tighter mb-16">
                    Services
                </h1>

                <div className="grid grid-cols-1 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group border-t border-black"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-6 text-left flex justify-between items-center gap-0 transition-all duration-200"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-xl md:text-7xl font-semibold">
                                    {service.question}
                                </span>
                                <span
                                    className={`text-gray-400 dark:text-gray-500 transform transition-all duration-300 text-sm rounded-full w-10 h-10 flex items-center justify-center ${openIndex === index ? "-rotate-50" : ""
                                        }`}
                                >
                                    <img
                                        src="/arrow.png"
                                        alt="arrow"
                                        className="w-10 sm:w-24 h-auto"
                                    />
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
                                    } overflow-hidden`}
                            >
                                <div className="px-6 space-y-4 grid sm:flex">
                                    <div className=" pt-4">
                                        <p className=" leading-relaxed">
                                            {service.answer}
                                        </p>
                                    </div>

                                    {service.image && (
                                        <div className="relative w-full h-120 rounded-lg overflow-hidden">
                                            <Image
                                                src={service.image.src}
                                                alt={service.image.alt}
                                                fill
                                                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact section */}
                <div className="mt-16 text-center"></div>
            </div>

            {/* Bottom blur from your original CSS */}
            <div
                className="fixed bottom-0 left-0 w-full h-50 pointer-events-none z-40"
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
                {/* Noise overlay */}
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