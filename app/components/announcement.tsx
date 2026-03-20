import React from 'react'

const announcement = () => {
    const announcementContent = (
        <>
            <span className='inline-flex items-center gap-2'>
                <span className='text-xl'>🔥</span>
                <span className='font-bold'>90% OFF EXCLUSIVE OFFER</span>
                <span className='text-xl'>🔥</span>
            </span>
            <span className='mx-8 text-xl'>•</span>
        </>
    )
    return (
        <div className='relative bg-linear-to-r from-red-600 to-red-500 text-white py-3 border-b overflow-hidden'>
            {/* Gradient overlays for fade effect on edges */}
            <div className='absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-red-600 to-transparent z-10'></div>
            <div className='absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-red-600 to-transparent z-10'></div>

            {/* Infinite scroll container */}
            <div className='flex whitespace-nowrap animate-scroll'>
                {/* First set */}
                <div className='flex items-center'>
                    {[...Array(10)].map((_, i) => (
                        <div key={`first-${i}`} className='flex items-center'>
                            {announcementContent}
                        </div>
                    ))}
                </div>

                {/* Second set (duplicate for seamless loop) */}
                <div className='flex items-center'>
                    {[...Array(10)].map((_, i) => (
                        <div key={`second-${i}`} className='flex items-center'>
                            {announcementContent}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default announcement