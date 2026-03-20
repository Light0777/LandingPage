"use client"

import React, { useState } from 'react'

const About = () => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    function brightness(arg0: number): import("csstype").Property.Filter | undefined {
        throw new Error('Function not implemented.')
    }

    return (
        <div id='About' className='sm:h-screen flex items-center justify-center p-4' onMouseMove={handleMouseMove}>
            <div>
                <h1 className='text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl text-left font-semibold sm:text-center p-2 sm:p-10 leading-normal'>
                    We help brands grow through{' '}
                    <span className='border border-amber-200 rounded-full px-3 bg-amber-300 text-amber-500'>smart marketing</span>
                    <div
                        className='inline-flex items-center justify-center mx-2 align-middle overflow-hidden rounded-lg w-20 h-8 md:w-40 md:h-20'
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/74/95/5a/74955a5342422c6521c95ba5e308d9eb.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://i.pinimg.com/736x/74/95/5a/74955a5342422c6521c95ba5e308d9eb.jpg"
                            alt=""
                            className='w-full h-full object-cover object-[center_14%] rounded-full shadow-lg'
                        />
                    </div>

                    <span className='border border-amber-200 rounded-full px-3 bg-green-400 text-green-700'> impactful advertising</span>
                    <div
                        className='inline-flex items-center justify-center mx-2 align-middle overflow-hidden rounded-lg w-20 h-8 md:w-40 md:h-20'
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/3a/44/97/3a4497eea7e31706e04d8ee18bf10338.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://i.pinimg.com/736x/3a/44/97/3a4497eea7e31706e04d8ee18bf10338.jpg"
                            alt=""
                            className='w-full h-full object-cover object-[center_14%] rounded-full shadow-lg'
                        />
                    </div>
                    , and {""}
                    <span className='border border-amber-200 rounded-full px-3 bg-red-500 text-red-700'> modern development</span>
                    <div
                        className='inline-flex items-center justify-center mx-2 align-middle overflow-hidden rounded-lg w-20 h-8 md:w-40 md:h-20'
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/09/c7/74/09c7744d5f70f0ec60a9ee6aa100bf28.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <img
                            src="https://i.pinimg.com/736x/09/c7/74/09c7744d5f70f0ec60a9ee6aa100bf28.jpg"
                            alt=""
                            className='w-full h-full object-cover object-[center_20%] rounded-full shadow-lg'
                        />
                    </div>.
                    Our approach blends {""}
                    <span
                        className='text-[#00ffff] cursor-pointer relative inline-block group'
                        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                        creativity
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ffff] transition-all duration-300 group-hover:w-full'></span>
                    </span> with data to build solutions that drive real results. {""}

                    {/* Updated text with image mask effect */}
                    <span
                        className='cursor-pointer inline-block'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/1200x/35/93/c3/3593c37d866c0e2bfa977e82267433d4.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: 'none',
                            fontWeight: 'bold',
                            filter: 'brightness(0.6) contrast(4)'
                        }}
                        onMouseEnter={() => setHoveredImage('https://i.pinimg.com/736x/09/e4/0a/09e40a3f556058ae2f57ba22bce36f12.jpg')}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        From idea to execution,
                    </span>

                    {""} we create

                    <span
                        className='satisfy'
                        style={{
                            backgroundImage: 'url("https://i.pinimg.com/736x/6a/52/69/6a526952f15fc6d7e89a2c9250ca53d9.jpg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: 'none',
                            fontWeight: 'bold',
                            filter: 'brightness(0.8) contrast(2)'
                        }}
                    > digital experiences </span>

                    that convert and scale.
                </h1>
            </div>

            {/* Hover image that follows cursor */}
            {hoveredImage && (
                <div
                    className='fixed pointer-events-none z-50'
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