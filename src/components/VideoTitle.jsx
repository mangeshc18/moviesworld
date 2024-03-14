import React from 'react'

const VideoTitle = ({title}) => {
    // console.log(title.title);
  return (
    <div className='absolute z-20 top-[40%] left-4 text-white'>
      <h2 className='text-2xl  font-semibold mb-4'>{title.title}</h2>
      <h2 className='text-sm  font-semibold mb-4  w-1/4'>{title.overview}</h2>
      <button className='bg-gray-500 text-white rounded-md p-2 mr-4 hover:bg-gray-300 font-semibold'>Play Now</button>
      <button className='bg-gray-500 text-white rounded-md py-2 px-4 hover:bg-gray-300 font-semibold'>Info</button>
    </div>
  )
}

export default VideoTitle
