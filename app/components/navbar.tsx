"use client"

import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { SendHorizontal } from "lucide-react"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [chatOpen, setChatOpen] = useState(false)

    const menuRef = useRef<HTMLDivElement>(null)
    const chatRef = useRef<HTMLDivElement>(null)
    const line1 = useRef<HTMLSpanElement>(null)
    const line2 = useRef<HTMLSpanElement>(null)
    const line3 = useRef<HTMLSpanElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

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

    const toggleChat = () => {
        if (!chatOpen) {
            // Show overlay first
            gsap.set(overlayRef.current, {
                display: "block",
                opacity: 0
            })
            
            gsap.to(overlayRef.current, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            })

            // Show the chat box
            gsap.set(chatRef.current, {
                display: "flex",
                opacity: 0,
                y: 100,
            })

            gsap.to(chatRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                overwrite: true
            })
        } else {
            // Hide overlay
            gsap.to(overlayRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(overlayRef.current, { display: "none" })
                }
            })

            // Hide chat box
            gsap.to(chatRef.current, {
                opacity: 0,
                y: 100,
                duration: 0.5,
                ease: "power3.in",
                onComplete: () => {
                    gsap.set(chatRef.current, { display: "none" })
                }
            })
        }
        setChatOpen(!chatOpen)
    }

    

    return (
        <>
            {/* Blur Overlay - appears behind chat but above main content */}
            <div
                ref={overlayRef}
                className="fixed inset-0 w-full h-full backdrop-blur-md bg-black/20 z-40"
                style={{ display: "none" }}
                onClick={toggleChat} // Optional: click overlay to close
            />

            {/* NAVBAR - stays above overlay */}
            <nav className="w-full flex justify-center fixed bottom-10 z-50">
                <div className="w-fit bg-neutral-800/90 rounded-2xl px-2 py-2 flex items-center gap-2 relative backdrop-blur-sm">

                    {/* Logo */}
                    <div className="w-15 h-15 bg-black rounded-lg flex justify-center items-center text-5xl text-white">L.</div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg text-xl text-white font-thin">Home</button>
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg text-xl text-white font-thin">About</button>
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg text-xl text-white font-thin">Projects</button>
                        <button className="bg-neutral-500 h-15 w-32 rounded-lg text-xl text-white font-thin">Contact</button>
                    </div>

                    {/* CTA */}
                    <div>
                        <button
                            onClick={toggleChat}
                            className="bg-lime-400 h-15 w-32 rounded-lg relative hover:bg-lime-300 transition-colors"
                        >
                            Contact us.
                        </button>
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

            {/* CHAT BOX - Fixed positioning (highest z-index) */}
            <div
                ref={chatRef}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 bg-neutral-800 w-71 md:w-189 rounded-2xl shadow-2xl border border-neutral-700 overflow-hidden flex-col z-60"
                style={{
                    display: "none",
                    height: "clamp(400px, 80vh, 600px)",
                    maxHeight: "calc(80vh - 80px)",
                    top: "calc(15% - 20px)",
                    transform: "translateX(-50%)"
                }}>
                {/* Chat Header */}
                <div className="bg-neutral-800 px-4 py-3 flex justify-start items-start">
                    <button
                        onClick={toggleChat}
                        className="text-neutral-400 hover:text-white transition-colors">
                        <div className="flex gap-2">
                            <div className="h-5 w-5 bg-red-400 rounded-full"></div>
                            <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
                            <div className="h-5 w-5 bg-gray-500 rounded-full"></div>
                        </div>
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 md:p-6 overflow-y-auto flex flex-col gap-4 min-h-0">
                    {/* Gradient Welcome Message */}
                    <div className="w-full h-auto min-h-50 sm:h-70 relative bg-[url('/gradient.jpg')] bg-cover bg-center rounded-xl md:rounded-2xl shadow-lg">
                        <div className="absolute bottom-0 left-0 p-4 md:p-6">
                            <p className="text-white text-2xl sm:text-3xl md:text-7xl font-bold drop-shadow-md tracking-tighter">
                                Hello!
                            </p>
                            <p className="text-white text-sm sm:text-base md:text-5xl font-semibold drop-shadow-md mt-1 tracking-tighter">
                                How can I help you today?
                            </p>
                        </div>
                    </div>

                    {/* Quick Question Chips */}
                    <div className="flex flex-col items-end gap-2 mt-2">
                        <p className="text-white text-xs sm:text-sm font-thin drop-shadow-md border border-white/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 w-fit hover:bg-white/10 transition-colors cursor-pointer">
                            What services do you offer?
                        </p>
                        <p className="text-white text-xs sm:text-sm font-thin drop-shadow-md border border-white/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 w-fit hover:bg-white/10 transition-colors cursor-pointer">
                            What's your pricing?
                        </p>
                    </div>

                    <div className="h-2"></div>
                </div>

                {/* Chat Input */}
                <div className="border-t border-neutral-700 p-3 mt-auto">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="say hello..."
                            className="flex-1 bg-neutral-800 rounded-full px-3 py-2 text-white text-sm outline-none w-20"
                        />
                        <button className="bg-lime-400 rounded-full px-2 py-2 text-sm font-medium text-neutral-900 hover:bg-lime-300 transition-colors shrink-0">
                            <SendHorizontal />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}