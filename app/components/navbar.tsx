"use client"

import { useState, useRef } from "react"
import { gsap } from "gsap"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)
    const line1 = useRef<HTMLSpanElement>(null)
    const line2 = useRef<HTMLSpanElement>(null)
    const line3 = useRef<HTMLSpanElement>(null)

    const toggleMenu = () => {
        if (!open) {

            gsap.to(menuRef.current, {
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            })

            gsap.to(line1.current, {
                rotate: -45,
                y: 3,
                duration: 0.3
            })

            gsap.to(line3.current, {
                rotate: 45,
                y: -2,
                duration: 0.3
            })

        } else {

            gsap.to(menuRef.current, {
                y: "100%",
                duration: 0.6,
                ease: "power3.in"
            })

            gsap.to([line1.current, line3.current], {
                rotate: 0,
                y: 0,
                duration: 0.3
            })
        }

        setOpen(!open)
    }

    return (
        <>
            {/* NAVBAR */}
            <nav className="w-full flex justify-center fixed bottom-10 z-50">
                <div className="w-fit bg-neutral-800/90 rounded-2xl px-2 py-1 flex items-center gap-2 relative">

                    {/* Logo */}
                    <div className="w-15 h-15 bg-black rounded-lg"></div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg"></button>
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg"></button>
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg"></button>
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg"></button>
                    </div>

                    {/* CTA */}
                    <div>
                        <button className="bg-lime-400 h-15 w-32 rounded-lg relative top-1"></button>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden w-15 h-15 bg-neutral-900 rounded-full flex flex-col justify-center items-center gap-1"
                    >
                        <span ref={line1} className="w-6 h-0.5 bg-white block"></span>
                        <span ref={line3} className="w-6 h-0.5 bg-white block"></span>
                    </button>

                </div>
            </nav>

            {/* FULLSCREEN MOBILE MENU */}
            <div
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-screen bg-neutral-900 flex flex-col items-start p-12 justify-start gap-5 tracking-tight text-white text-3xl font-medium translate-y-full z-40"
            >
                <button>Home</button>
                <button>About</button>
                <button>Projects</button>
                <button>Clients</button>
                <button>News</button>
                <button>Social Media</button>
                <button>Blog</button>
                <button>Contact</button>
            </div>
        </>
    )
}