"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HeroText = () => {

    const imageRef = useRef<HTMLImageElement>(null)
    const mainTextRef = useRef<HTMLHeadingElement>(null)
    const subTextRef = useRef<HTMLHeadingElement>(null)
    const trendsRef = useRef<HTMLImageElement>(null)
    const youtubeRef = useRef<HTMLImageElement>(null)
    const instaRef = useRef<HTMLImageElement>(null)
    const xRef = useRef<HTMLImageElement>(null)

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        // Set initial states for all elements
        gsap.set([mainTextRef.current, subTextRef.current], {
            opacity: 0,
            y: 50
        })
        
        gsap.set(trendsRef.current, {
            opacity: 0,
            x: -100,
            scale: 0.9
        })
        
        gsap.set([youtubeRef.current, instaRef.current, xRef.current], {
            opacity: 0,
            x: -150,
            scale: 0.8
        })
        
        // Set hero image initial state (hidden but with scroll trigger values)
        gsap.set(imageRef.current, {
            opacity: 0,
            scale: 0.85,
            y: 100
        })

        // Master timeline for all entrance animations
        const masterTl = gsap.timeline()

        // Animate main text
        masterTl.to(mainTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        
        // Animate trends image
        masterTl.to(trendsRef.current, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.2)"
        }, "-=0.4")
        
        // Animate social icons
        masterTl.to([youtubeRef.current, instaRef.current, xRef.current], {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "back.out(1.2)"
        }, "-=0.5")
        
        // Animate sub text
        masterTl.to(subTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.3")
        
        // Fade in hero image
        masterTl.to(imageRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power1.out",
            onComplete: () => {
                // After fade-in is complete, set up the scroll trigger
                // that will handle scale and y movement
                gsap.fromTo(imageRef.current,
                    {
                        scale: 0.85,
                        y: 100
                    },
                    {
                        scale: 1.0,
                        y: -100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: imageRef.current,
                            start: "top 80%",
                            end: "top 10%",
                            scrub: true
                        }
                    }
                )
            }
        })

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }

    }, [])

    return (
        <div id="Home">

            {/* TEXT */}
            <div className='w-full h-150 flex items-center justify-center'>
                <div className='grid'>
                    <div className='grid lg:flex'>
                        <div>
                            <h1 ref={mainTextRef} className='font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter'>
                                WE KNOW
                            </h1>
                        </div>

                        <div className='grid sm:flex gap-2 md:pl-2'>
                            <img 
                                ref={trendsRef}
                                src="trends.png" 
                                alt="Trends" 
                                className="w-auto rounded-2xl"
                            />

                            <div className='flex gap-2 w-20 sm:w-fit'>
                                <img 
                                    ref={youtubeRef}
                                    src="youtube.png" 
                                    alt="YouTube" 
                                    className="rounded-2xl"
                                />
                                <img 
                                    ref={instaRef}
                                    src="insta.png" 
                                    alt="Instagram" 
                                    className="rounded-2xl"
                                />
                                <img 
                                    ref={xRef}
                                    src="x.png" 
                                    alt="X" 
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 ref={subTextRef} className='font-bold text-5xl w-70 sm:w-fit sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter'>
                            MEDIA AND MARKETING.
                        </h1>
                    </div>
                </div>
            </div>

            {/* IMAGE - WITH FADE IN AND SCROLL TRIGGER */}
            <div className='flex justify-center items-center p-5 -mt-55 overflow-hidden hidden md:block'>
                <img
                    ref={imageRef}
                    src="hero.png"
                    alt="hero"
                    className='rounded-2xl w-full will-change-transform'
                />
            </div>
            <div className='flex justify-center items-center p-5 -mt-25 overflow-hidden black md:hidden'>
                <img
                    src="hero.png"
                    alt="hero"
                    className='rounded-2xl w-full will-change-transform'
                />
            </div>

        </div>
    )
}

export default HeroText