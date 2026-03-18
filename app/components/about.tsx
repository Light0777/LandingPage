"use client"

import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const sectionRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLHeadingElement>(null)
    const elementsRef = useRef<(HTMLSpanElement | HTMLDivElement | null)[]>([])

    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Animate the entire section on scroll
            gsap.fromTo(sectionRef.current,
                {
                    opacity: 0,
                    y: 100
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: 1,
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Animate each element with stagger effect
            gsap.fromTo(elementsRef.current,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        end: "top 20%",
                        scrub: 0.5,
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Special animation for the colored spans
            gsap.fromTo(".highlight-text",
                {
                    scale: 0.9,
                    rotate: -2
                },
                {
                    scale: 1,
                    rotate: 0,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "top 30%",
                        scrub: 0.8,
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Parallax effect for images
            gsap.to(".image-container", {
                y: -5,
                duration: 2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    toggleActions: "play none none reverse"
                }
            })

            // Floating animation for the hover preview
            gsap.to(".hover-preview", {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    // Function to add elements to the ref array
    const addToRefs = (el: HTMLSpanElement | HTMLDivElement | null) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el)
        }
    }

    return (
        <div 
            ref={sectionRef}
            className='min-h-screen flex items-center justify-center p-4' 
            onMouseMove={handleMouseMove}
        >
            <div>
                <h1 
                    ref={textRef}
                    className='text-2xl md:text-4xl xl:text-6xl text-left font-semibold sm:text-center sm:p-10 leading-normal'
                >
                    <span ref={addToRefs}>We help brands grow through{' '}</span>
                    <span 
                        ref={addToRefs}
                        className='highlight-text border border-amber-200 rounded-full px-3 bg-amber-300 text-amber-500'
                    >
                        smart marketing
                    </span>
                    <div
                        ref={addToRefs}
                        className='image-container inline-flex items-center justify-center mx-2 align-middle overflow-hidden rounded-lg w-20 h-8 md:w-40 md:h-20'
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/74/95/5a/74955a5342422c6521c95ba5e308d9eb.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://i.pinimg.com/736x/74/95/5a/74955a5342422c6521c95ba5e308d9eb.jpg"
                            alt=""
                            className='w-full h-full object-cover object-[center_14%] rounded-full shadow-lg'
                        />
                    </div>

                    <span 
                        ref={addToRefs}
                        className='highlight-text border border-amber-200 rounded-full px-3 bg-green-400 text-green-700'
                    >
                        {' '}impactful advertising
                    </span>
                    <div
                        ref={addToRefs}
                        className='image-container inline-flex items-center justify-center mx-2 align-middle overflow-hidden rounded-lg w-20 h-8 md:w-40 md:h-20'
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/3a/44/97/3a4497eea7e31706e04d8ee18bf10338.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://i.pinimg.com/736x/3a/44/97/3a4497eea7e31706e04d8ee18bf10338.jpg"
                            alt=""
                            className='w-full h-full object-cover object-[center_14%] rounded-full shadow-lg'
                        />
                    </div>
                    <span ref={addToRefs}>, and {""}</span>
                    <span 
                        ref={addToRefs}
                        className='highlight-text border border-amber-200 rounded-full px-3 bg-red-500 text-red-700'
                    >
                        modern development
                    </span>
                    <div
                        ref={addToRefs}
                        className='image-container inline-flex items-center justify-center mx-2 align-middle overflow-hidden rounded-lg w-20 h-8 md:w-40 md:h-20'
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/09/c7/74/09c7744d5f70f0ec60a9ee6aa100bf28.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://i.pinimg.com/736x/09/c7/74/09c7744d5f70f0ec60a9ee6aa100bf28.jpg"
                            alt=""
                            className='w-full h-full object-cover object-[center_20%] rounded-full shadow-lg'
                        />
                    </div>
                    <span ref={addToRefs}>.</span>
                    <span ref={addToRefs}> Our approach blends {""}</span>
                    <span
                        ref={addToRefs}
                        className='highlight-text text-[#00ffff] cursor-pointer relative inline-block group'
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                        creativity
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] transition-all duration-300 group-hover:w-full'></span>
                    </span> 
                    <span ref={addToRefs}> with data to build solutions that drive real results. {""}</span>
                    
                    {/* Updated text with hover image effect */}
                    <span 
                        ref={addToRefs}
                        className='highlight-text text-[#de5cff] cursor-pointer inline-block' 
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/09/e4/0a/09e40a3f556058ae2f57ba22bce36f12.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        From idea to execution,
                    </span>
                    
                    <span ref={addToRefs}>{""} we create</span>
                    <span 
                        ref={addToRefs}
                        className='highlight-text text-[#fffb00] satisfy' 
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                        {' '}digital experiences
                    </span> 
                    <span ref={addToRefs}> that convert and scale.</span>
                </h1>
            </div>

            {/* Hover image that follows cursor */}
            {hoveredImage && (
                <div
                    className='hover-preview fixed pointer-events-none z-50'
                    style={{
                        left: mousePosition.x + 20,
                        top: mousePosition.y - 100,
                        transform: 'translate(0, -50%)'
                    }}
                >
                    <img
                        src={hoveredImage}
                        alt="hover preview"
                        className='w-64 h-auto rounded-lg shadow-2xl border-4 border-white'
                    />
                </div>
            )}
        </div>
    )
}

export default About