import React from 'react'
import Video from '../components/home/Video'

const Projects = () => {
  return (
    <div className="font-[font1] uppercase text-black text-center pt-2.5">
      <div className="text-[9.5vw] leading-[9vw] flex items-center justify-center">
        L'étincelle
      </div>
      <div className=' flex justify-center '>
        qu
        <div className='bg-green-400 overflow-hidden h-[20%] w-[30%] rounded-full'>
          <Video/>
        </div>
        genre
      </div>
      <div className="text-[9.5vw] leading-[9vw] flex items-center justify-center">
        la créativité
      </div>
    </div>
  )
}

export default Projects