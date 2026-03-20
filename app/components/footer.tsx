import React from 'react'

const Footer = () => {
    return (
        <footer id='Footer' className='bg-[#141414] text-[#E9E9E9] relative'>
            {/* Main footer content */}
            <div className=' mx-auto p-6 sm:px-12 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
                    {/* Left section - Description */}
                    <div className='max-w-md'>
                        <p className='text-lg leading-relaxed text-[#E9E9E9]/90'>
                            Crafting bold digital experiences through marketing, advertising, and development.
                            Built to grow brands, drive results, and stand out in the digital world.
                        </p>
                    </div>

                    {/* Center section - Newsletter */}
                    <div className='lg:mx-auto'>
                        <h3 className='text-sm font-semibold uppercase tracking-wider mb-4 text-[#E9E9E9]/70'>
                            Newsletter
                        </h3>
                        <p className='text-sm mb-4 text-[#E9E9E9]/70'>
                            Subscribe to stay updated with the latest news
                        </p>
                        <div className='flex flex-col sm:flex-row gap-3'>
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className='bg-transparent border-b border-[#E9E9E9]/30 py-2 px-1 focus:outline-none focus:border-[#E9E9E9] transition-colors text-sm'
                            />
                            <button className='bg-[#E9E9E9] text-[#141414] px-6 py-2 text-sm font-medium hover:bg-[#E9E9E9]/90 transition-colors whitespace-nowrap'>
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Right section - Links */}
                    <div className='lg:text-right'>
                        <h3 className='text-sm font-semibold uppercase tracking-wider mb-4 text-[#E9E9E9]/70'>
                            Links
                        </h3>
                        <ul className='space-y-2'>
                            {['Home', 'About', 'Contact', 'Products'].map((item) => (
                                <li key={item}>
                                    <a 
                                        href={`#${item.toLowerCase()}`}
                                        className='text-[#E9E9E9]/70 hover:text-[#E9E9E9] transition-colors text-sm'
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Large Footer Text at Bottom */}
            <div className='w-full overflow-hidden border-t border-[#E9E9E9]/10'>
                <div className='text-[clamp(5rem,20vw,20rem)] font-bold text-[#E9E9E9] text-center leading-none py-8 select-none'>
                    FOOTER
                </div>
            </div>

            {/* Bottom bar with copyright */}
            <div className='py-4'>
                <div className='container mx-auto px-6'>
                    <p className='text-xs text-[#E9E9E9]/40 text-center'>
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
            <div className='h-30'></div>
        </footer>
    )
}

export default Footer