import React from 'react'

const Banner = () => {
  return (
    <div>
				<div className=' absolute  w-full h-full max-h-[500px]  text-gray-200  bg-black/30 flex flex-col rounded-2xl  justify-center items-center '>
          <div >
          <h1 className='z-0 text-4xl px-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
						Better <span className=' text-orange-400 pl-5'>Games</span>
					</h1>
					<h1 className=' z-0    text-4xl px-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
						<span className=' text-orange-400 pr-5'>Better</span> <span>Price </span>
					</h1>
          </div>
				</div>
				

				<img
					className='w-full h-full max-h-[500px] object-cover rounded-2xl'
					src='/game-covers/Banner.jpeg'
					alt='/'
				/>
			</div>
  )
}

export default Banner