import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-sm w-1/2'>{overview}</p>
        <div className="flex my-4 md:m-0">
        <button className="bg-white text-black md:p-3 px-6 md:px-8 text-l font-semibold hover:bg-opacity-80 rounded-lg flex">
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