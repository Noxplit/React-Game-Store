import React from 'react'
import ButtonBuy from './ButtonBuy/ButtonBuy'
import GameCover from './GameCover/GameCover'
export default function GamesItem({ game }) {
	return (
		<div className='bg-[#2a2827] rounded-2xl p-4 flex flex-col gap-5 lg:w-[250px]'>
			<div className='object-cover object-top hover:scale-105 ease-in duration-300 '>
				<GameCover thumbnail={game.thumbnail} id={game.id}  />


			</div>
			<span className='font-bold '>{game.title}</span>


			<span className='flex gap-4 text-[#777779]'>{game.genre}</span>

			<div className='flex justify-between'>
			<span className='flex gap-4 text-[#777779]'>{game.platform}</span>
					<ButtonBuy game={game} />
			</div>
		</div>
	)
}
