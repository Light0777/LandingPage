"use client";
import React, { useRef, useEffect } from 'react';

const UIElements = () => {
  // Array of action words to scroll through
  const actions = [
    'Built',
    'Created',
    'Written',
    'Made',
    'Designed',
    'Coded',
    'Launched',
    'Imagined',
    'Engineered',
    'Crafted',
    'Dreamed',
    'Sculpted',
    'Painted',
    'Composed',
    'Forged',
  ];

  // Dynamic colors array for background and text
 const colorCombinations = [
    { bg: 'bg-[#75daff]', text: 'text-[#003b5c]' },
    { bg: 'bg-[#cf75ff]', text: 'text-[#4a0072]' },
    { bg: 'bg-[#00ff73]', text: 'text-[#006b2f]' },
    { bg: 'bg-[#ce96ff]', text: 'text-[#4b0082]' },
    { bg: 'bg-[#ffb3b3]', text: 'text-[#b30000]' },
    { bg: 'bg-[#ffd966]', text: 'text-[#b37b00]' },
    { bg: 'bg-[#b3ecff]', text: 'text-[#006080]' },
    { bg: 'bg-[#ffb3ff]', text: 'text-[#b300b3]' },
    { bg: 'bg-[#b3ffb3]', text: 'text-[#008000]' },
    { bg: 'bg-[#ffcc99]', text: 'text-[#b35c00]' },
    { bg: 'bg-[#c2c2ff]', text: 'text-[#0000b3]' },
    { bg: 'bg-[#ffb3d9]', text: 'text-[#b3005c]' },
    { bg: 'bg-[#99ff99]', text: 'text-[#006600]' },
    { bg: 'bg-[#ffb380]', text: 'text-[#b34500]' },
    { bg: 'bg-[#d9b3ff]', text: 'text-[#4d0099]' },
    { bg: 'bg-[#b3ffff]', text: 'text-[#006666]' },
    { bg: 'bg-[#ffe6b3]', text: 'text-[#b38200]' },
    { bg: 'bg-[#ffb3b3]', text: 'text-[#990000]' },
    { bg: 'bg-[#b3b3ff]', text: 'text-[#000099]' },
    { bg: 'bg-[#ffb3e6]', text: 'text-[#b3006b]' },
    { bg: 'bg-[#b3ffcc]', text: 'text-[#006633]' },
    { bg: 'bg-[#ffccb3]', text: 'text-[#b34d00]' },
    { bg: 'bg-[#ccb3ff]', text: 'text-[#330099]' },
    { bg: 'bg-[#b3ffe6]', text: 'text-[#00664d]' },
    { bg: 'bg-[#ffe6ff]', text: 'text-[#990099]' },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollContent = scrollContainer.firstChild as Element;
    if (!scrollContent) return;

    while (scrollContent.firstChild) {
      scrollContent.removeChild(scrollContent.firstChild);
    }

    // Add 4x content with responsive classes
    for (let i = 0; i < 4; i++) {
      actions.forEach((action, index) => {
        const colors = colorCombinations[index % colorCombinations.length];
        const element = document.createElement('h1');
        // Responsive padding and text size for pills
        element.className = `whitespace-nowrap py-1.5 px-3 sm:py-3 sm:px-6 my-1 rounded-full text-xs sm:text-base md:text-7xl ${colors.bg} ${colors.text}`;
        element.textContent = action;
        scrollContent.appendChild(element);
      });
    }

    let animationFrame: number;
    let lastTimestamp: number;
    const scrollSpeed = 0.08;

    const scroll = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animationFrame = requestAnimationFrame(scroll);
        return;
      }

      const deltaTime = timestamp - lastTimestamp;
      const safeDeltaTime = Math.min(deltaTime, 50);
      const scrollAmount = scrollSpeed * safeDeltaTime;

      if (scrollContainer) {
        scrollContainer.scrollTop += scrollAmount;

        const itemsPerSet = actions.length;
        const firstItemHeight = (scrollContent.children[0] as HTMLElement)?.offsetHeight || 0;
        const gap = 4;
        const oneSetHeight = itemsPerSet * (firstItemHeight + gap);

        if (scrollContainer.scrollTop >= oneSetHeight * 2) {
          scrollContainer.scrollTop -= oneSetHeight;
        }
      }

      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="sm:h-screen grid items-center justify-center overflow-hidden">
      {/* Main container: flex row with fixed typography and scrollable center */}
      <div className="flex gap-1 sm:gap-3 text-base md:text-7xl text-left font-semibold p-6 sm:p-10 leading-tight sm:leading-normal items-center max-w-full overflow-hidden relative">
        {/* Fixed left part - responsive text */}
        <h1 className="whitespace-nowrap shrink-0 text-sm sm:text-base md:text-7xl">
          Nothing Great have
        </h1>

        {/* Scrollable container with fade effects */}
        <div className="relative shrink-0 max-w-[35vw] xs:max-w-[40vw] sm:max-w-[50vw]">
          {/* Top fade gradient - adjusted for mobile */}
          <div className="absolute top-0 left-0 right-0 bg-linear-to-b h-[10vh] sm:h-[30vh] from-[#E9E9E9] to-transparent pointer-events-none z-10"></div>
          
          {/* Bottom fade gradient - adjusted for mobile */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t h-[10vh] sm:h-[30vh] from-[#E9E9E9] to-transparent pointer-events-none z-10"></div>
          
          {/* Scrollable container - responsive height */}
          <div
            ref={scrollContainerRef}
            className="overflow-y-auto scrollbar-hide h-[40vh] sm:h-screen"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex flex-col text-center items-center">
              {/* Content will be dynamically added by useEffect */}
            </div>
          </div>
        </div>

        {/* Fixed right part - responsive text */}
        <h1 className="whitespace-nowrap shrink-0 text-sm sm:text-base md:text-7xl">
          Alone
        </h1>
      </div>

      {/* Add custom xs breakpoint for very small devices */}
      <style jsx>{`
        @media (min-width: 380px) {
          .xs\:max-w-\[40vw\] {
            max-width: 40vw;
          }
        }
      `}</style>
      <div className='h-30 block sm:hidden w-full'></div>
    </div>
  );
};

export default UIElements;