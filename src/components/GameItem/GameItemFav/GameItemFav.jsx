import React from 'react'
import GameCover from '../GameCover/GameCover'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { removeGame } from '../../../Redux/Cart/favoriteSlice'

export default function GamesItem({ game }) {
	const dispatch = useDispatch()

	return (
		<div className='bg-[#2a2827] rounded-2xl p-4 flex flex-col gap-5 lg:w-[250px]'>
			<div className='object-cover object-top hover:scale-105 ease-in duration-300 '>
				<GameCover thumbnail={game.thumbnail} id={game.id} />
			</div>
			<span className='font-bold '>{game.title}</span>

			<span className='flex gap-4 text-[#777779]'>{game.genre}</span>

			<div className='flex justify-between items-center'>
				<span className='flex text-[#777779]'>{game.platform}</span>
				<MdOutlineDeleteOutline
					onClick={() => dispatch(removeGame(game.id))}
					size={30}
					className='cursor-pointer hover:scale-105 ease-in duration-300'
				/>
			</div>
		</div>
	)
}
