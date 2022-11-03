import React from 'react'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='py-5 flex flex-col gap-2 justify-center items-center'>
    <div className='text-[#777779]'>Created and Designed by Denis Savitsky 2022 ©</div>
    <a href='https://github.com/Noxplit'><BsGithub size={30} className='cursor-pointer hover:scale-105 ease-in duration-300'/></a>
    </div>

  )
}

export default Footer