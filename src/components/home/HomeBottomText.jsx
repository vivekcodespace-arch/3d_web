import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex  font-[font2] justify-center  gap-2 text-white pb-1.5'>
      <Link to="/projects" className='text-[6vw] leading-[5.5vw] border-2 rounded-full uppercase px-3 pt-1 hover:border-[#d3fd50] hover:text-[#d3fd50] '>Projects</Link>
      <Link to="/agence" className='text-[6vw] leading-[5.5vw] border-2 rounded-full uppercase px-3 pt-1 hover:border-[#d3fd50] hover:text-[#d3fd50] '>Agence</Link>
    </div>
  )
} 

export default HomeBottomText