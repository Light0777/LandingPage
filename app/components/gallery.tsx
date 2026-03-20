import React from 'react'

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/46/24/2d/46242df2830810314be241b000ae0c7b.jpg",
      alt: "projects",
      span: "row-span-2", // Kosmos
      name: "Kosmos"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/69/f2/51/69f251d9cd449f1c8ce324f12ebca701.jpg",
      alt: "projects",
      span: "row-span-1", // Glitch
      name: "Glitch"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/01/b3/6a/01b36a6014c446fa5e477fbc01879130.jpg",
      alt: "projects",
      span: "row-span-1", // Spectra Design
      name: "Spectra Design"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/1200x/b9/5b/a6/b95ba695f5a2e5d1724a1bc32cf5f129.jpg",
      alt: "projects",
      span: "row-span-2", // crossroad
      name: "Crossroad"
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/3d/ee/cf/3deecfd7fcd039fb6194cc09e12d492e.jpg",
      alt: "projects",
      span: "row-span-1", // Grid Studio
      name: "Grid Studio"
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/d8/e0/c3/d8e0c38048ad9f02dc71f13363bbcfb5.jpg",
      alt: "projects",
      span: "row-span-1", // Prism Creative
      name: "Prism Creative"
    }
  ];

  return (
    <div id='Gallery' className='p-5 sm:p-10'>
      <div className='mb-10'>
        <h1 className='text-end text-2xl sm:text-5xl font-thin tracking-tighter'>
          Gallery of our projects
        </h1>
      </div>

      {/* Pinterest-style masonry grid */}
      <div className='columns-1 sm:columns-2 gap-6 space-y-6'>
        {images.map((image) => (
          <div
            key={image.id}
            className='break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='w-full h-auto object-cover transition-transform duration-500'
            />

            {/* Optional overlay on hover */}
            <div className='absolute top-0 flex items-end p-4'>
              <p className='text-white text-lg font-thin border border-white/30 px-3 rounded-full backdrop-blur-md bg-black/20 shadow-2xl shadow-black/50'>
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Alternative: CSS Grid Masonry (more controlled) */}
      <div className='hidden mt-16'>
        <h2 className='text-3xl mb-6'>Alternative Masonry Layout</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[10px]'>
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${image.span} rounded-2xl overflow-hidden`}
              style={{ gridRowEnd: `span ${index % 3 === 0 ? 25 : 20}` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery