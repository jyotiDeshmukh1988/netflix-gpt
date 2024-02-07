import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full h-screen aspect-video lg:pt-[18%] sm:pt-[16%] pt-[24%] lg:px-8 md:px-8 px-6 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='lg:text-5xl text-2xl font-bold md:text-4xl sm:text-4xl'>{title}</h1>
        <p className='py-6 text-sm lg:w-1/2 md:w-full'>{overview}</p>
        <div className="flex my-4 md:m-0">
        <button className="bg-white text-black px-6 lg:px-8 md:px-8 text-l font-semibold hover:bg-opacity-80 rounded-lg flex items-center">
          <span className="material-symbols-outlined ">play_arrow</span>Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-3 px-6 text-l font-semibold bg-opacity-50 hover:bg-opacity-80 rounded-lg md:flex hidden">
          <span className="material-symbols-outlined px-1">info</span> More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle