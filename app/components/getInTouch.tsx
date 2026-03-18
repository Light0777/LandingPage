import React from 'react'
import Image from 'next/image';

const GetInTouch = () => {
    const icons = [
        { src: "/mail.svg", alt: "mail icon" },
        { src: "/web.svg", alt: "web icon" },
        { src: "/social.svg", alt: "social icon" },
        { src: "/user.svg", alt: "user icon" }
    ];

    return (
        <div className="h-fit sm:min-h-screen grid p-6 md:p-10">
            <div className="flex flex-col w-full gap-4 sm:gap-8 md:gap-10">
                <h1 className="text-3xl md:text-7xl font-bold text-left">
                    Get In Touch
                </h1>
                
                {/* Icons stacked vertically, each taking full width */}
                <div className="flex flex-col w-full gap-2 sm:gap-6">
                    {icons.map((icon, index) => (
                        <div 
                            key={index}
                            className="relative w-full rounded-2xl
                                     flex items-center justify-start"
                        >
                            <Image
                                src={icon.src}
                                alt={icon.alt}
                                width={200}
                                height={200}
                                className="w-auto h-auto max-w-full max-h-10 sm:max-h-23 md:max-h-38 lg:max-h-48 xl:max-h-68 object-contain cursor-pointer"
                                priority={index < 2}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='h-30'></div>
        </div>
    )
}

export default GetInTouch;