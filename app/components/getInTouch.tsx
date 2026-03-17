'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { User, Globe, Mail, Share2 } from 'lucide-react'

gsap.registerPlugin(Draggable)

const GetInTouch = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const lensRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const activeIndexRef = useRef(activeIndex)
    const items = [
        { icon: User, label: 'Name' },
        { icon: Globe, label: 'Website' },
        { icon: Mail, label: 'Email' },
        { icon: Share2, label: 'Social' }
    ]
    const buttonWidth = 48 // w-12 = 48px

    useEffect(() => {
        activeIndexRef.current = activeIndex
    }, [activeIndex])

    useEffect(() => {
        const lens = lensRef.current
        const track = trackRef.current
        if (!lens || !track) return

        // Get actual dimensions
        const trackWidth = track.offsetWidth
        const lensWidth = lens.offsetWidth
        
        // Calculate max movement (track inner width - lens width)
        // Track has p-2 (8px padding on each side = 16px total)
        const maxX = trackWidth - lensWidth - 16

        console.log('Track:', trackWidth, 'Lens:', lensWidth, 'MaxX:', maxX)

        const draggableInstance = Draggable.create(lens, {
            type: 'x',
            bounds: { minX: 0, maxX: maxX },
            edgeResistance: 0.65,
            inertia: true,
            dragResistance: 0.1,
            onPress: function () {
                gsap.to(lens, {
                    scale: 1.4,
                    duration: 0.2,
                    ease: 'power2.out',
                    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5), inset -2px -4px 3px rgba(255,255,255,0.4), inset 2px 4px 3px rgba(255,255,255,0.4), 0 0 15px rgba(0,0,0,0.35)'
                })
            },
            onDrag: function () {
                const segmentWidth = maxX / (items.length - 1)
                const newIndex = Math.min(items.length - 1, Math.max(0, Math.round(this.x / segmentWidth)))
                if (newIndex !== activeIndexRef.current) {
                    setActiveIndex(newIndex)
                }
            },
            onDragEnd: function () {
                const segmentWidth = maxX / (items.length - 1)
                const snapX = Math.round(this.x / segmentWidth) * segmentWidth
                gsap.to(lens, {
                    x: snapX,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.4)',
                    onUpdate: () => {
                        const newIndex = Math.round(snapX / segmentWidth)
                        if (newIndex !== activeIndexRef.current) setActiveIndex(newIndex)
                    },
                    onComplete: () => {
                        gsap.to(lens, {
                            scale: 1,
                            boxShadow: 'inset 0 0 14px rgba(255,255,255,0.3), inset -1px -3px 2px rgba(255,255,255,0.3), inset 1px 3px 2px rgba(255,255,255,0.3), 0 0 10px rgba(0,0,0,0.25)',
                            duration: 0.3,
                            ease: 'power2.out'
                        })
                    }
                })
            },
            onRelease: function () {
                gsap.to(lens, {
                    scale: 1,
                    boxShadow: 'inset 0 0 14px rgba(255,255,255,0.3), inset -1px -3px 2px rgba(255,255,255,0.3), inset 1px 3px 2px rgba(255,255,255,0.3), 0 0 10px rgba(0,0,0,0.25)',
                    duration: 0.3,
                    ease: 'power2.out'
                })
            }
        })[0]

        // Set initial position
        const segmentWidth = maxX / (items.length - 1)
        gsap.set(lens, { x: activeIndexRef.current * segmentWidth })

        return () => {
            draggableInstance?.kill()
        }
    }, [])

    const handleButtonClick = (index: number) => {
        if (!lensRef.current || !trackRef.current) return
        const track = trackRef.current
        const lens = lensRef.current
        const maxX = track.offsetWidth - lens.offsetWidth - 16
        const segmentWidth = maxX / (items.length - 1)
        const targetX = segmentWidth * index

        setActiveIndex(index)
        gsap.to(lens, {
            x: targetX,
            duration: 0.6,
            ease: 'backOut(1.7)',
            onStart: () => { gsap.to(lens, { scale: 1.1, duration: 0.2 }) },
            onComplete: () => { gsap.to(lens, { scale: 1, duration: 0.3 }) }
        })
    }

    // Function to render email with highlighted parts based on active index
    const renderHighlightedEmail = () => {
        const baseClasses = "text-[clamp(2rem,15vw,9rem)] font-medium text-center px-4 transition-all duration-500"
        
        switch(activeIndex) {
            case 0: // Name - highlight "BigBoyLilBro"
                return (
                    <h1 className={baseClasses}>
                        <span className="bg-[#141414] bg-clip-text text-transparent inline-block transition-all duration-500 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">BigBoyLilBro</span>
                        <span className="text-gray-300 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">@lilBoy.com</span>
                    </h1>
                )
            case 1: // Website - highlight "lilBoy.com"
                return (
                    <h1 className={baseClasses}>
                        <span className="text-gray-300 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">BigBoyLilBro@</span>
                        <span className="bg-[#141414] bg-clip-text text-transparent inline-block transition-all duration-500 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">lilBoy.com</span>
                    </h1>
                )
            case 2: // Email - highlight everything
                return (
                    <h1 className={baseClasses}>
                        <span className="bg-[#141414] bg-clip-text text-transparent inline-block transition-all duration-500 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            BigBoyLilBro@lilBoy.com
                        </span>
                    </h1>
                )
            case 3: // Social - highlight "@lilBoy"
                return (
                    <h1 className={baseClasses}>
                        <span className="text-gray-300 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">BigBoyLilBro</span>
                        <span className="bg-[#141414] bg-clip-text text-transparent inline-block transition-all duration-500 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">@lilBoy</span>
                        <span className="text-gray-300 text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">.com</span>
                    </h1>
                )
            default:
                return (
                    <h1 className={baseClasses}>
                        BigBoyLilBro@lilBoy.com
                    </h1>
                )
        }
    }

    return (
        <div className='h-[70vh] sm:h-screen p-5 sm:p-10 text-left relative overflow-hidden'>
            <h1 className='text-3xl sm:text-7xl font-bold leading-tight tracking-tight relative z-10'>
                Get In Touch
            </h1>

            <div className='absolute inset-0 flex justify-center items-center text-2xl pointer-events-none h-[50vh] sm:h-full'>
                {renderHighlightedEmail()}
            </div>

            <div className='absolute bottom-40 left-0 right-0 flex justify-center'>
                <div className='relative w-auto'>
                    <div
                        ref={trackRef}
                        className='backdrop-blur-xl bg-white/20 rounded-full p-2 shadow-2xl border border-white/30'
                        style={{ width: items.length * buttonWidth + 15 }}>
                        {/* Glass Lens */}
                        <div
                            ref={lensRef}
                            className="absolute top-2 left-2 w-14 h-14 rounded-full cursor-grab z-20 overflow-hidden"
                            style={{
                                backdropFilter: 'blur(10px) saturate(1.4)',
                                WebkitBackdropFilter: 'blur(10px) saturate(1.4)',
                                border: '1px solid rgba(255,255,255,0.6)',
                                boxShadow: `
                                    inset 0 0 25px rgba(255,255,255,0.5),
                                    inset -3px -6px 6px rgba(255,255,255,0.35),
                                    inset 3px 6px 6px rgba(255,255,255,0.35),
                                    0 8px 30px rgba(0,0,0,0.25)
                                `,
                                touchAction: 'none'
                            }}
                        >
                            {/* DISTORTION LAYER */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    transform: 'scale(1.25)',
                                    background: 'inherit',
                                    filter: 'contrast(1.2) brightness(1.15)',
                                    maskImage: 'radial-gradient(circle at center, white 40%, transparent 70%)',
                                    WebkitMaskImage: 'radial-gradient(circle at center, white 40%, transparent 70%)'
                                }}
                            />

                            {/* LIGHT REFLECTION */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-70" />

                            {/* EDGE SHINE */}
                            <div className="absolute inset-0 rounded-full border border-white/40" />
                        </div>

                        {/* Buttons with Icons */}
                        <div className='flex relative z-10'>
                            {items.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleButtonClick(index)}
                                        className={`w-12 h-14 flex items-center justify-center rounded-full transition-all duration-300 ${
                                            activeIndex === index
                                                ? 'text-black scale-110' 
                                                : 'text-black/50 hover:text-black/80'
                                        }`}
                                    >
                                        <Icon size={24} strokeWidth={1.5} />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch