"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const HeroText = () => {

    const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(
            imageRef.current,
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

    }, [])

    return (
        <div>

            {/* TEXT */}
            <div className='w-full h-150 flex items-center justify-center'>
                <div className='grid'>
                    <div className='grid lg:flex'>
                        <div>
                            <h1 className='font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter'>
                                WE KNOW
                            </h1>
                        </div>

                        <div className='grid sm:flex gap-2 md:pl-2'>
                            <img src="trends.png" alt="Hero" className="w-auto rounded-2xl"/>

                            <div className='flex gap-2 w-20 sm:w-fit'>
                                <img src="insta.png" alt="Hero" className="rounded-2xl"/>
                                <img src="x.png" alt="Hero" className="rounded-2xl"/>
                                <img src="pin.png" alt="Hero" className="rounded-2xl"/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-5xl w-70 sm:w-fit sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter'>
                            MEDIA AND MARKETING.
                        </h1>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
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