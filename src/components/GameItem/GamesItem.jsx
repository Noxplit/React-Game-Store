import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import ButtonBuy from './ButtonBuy/ButtonBuy'
import GameCover from './GameCover/GameCover'
import { addFavoriteGame } from '../../Redux/Cart/favoriteSlice'

export default function GamesItem({ game}) {

  const [isActive, setActive] = useState(false)
 
  const dispatch = useDispatch()

  function activeFavorite() {
    setActive(!isActive)
    dispatch(addFavoriteGame(game))
  }




	return (
		<div className='bg-[#2a2827] rounded-2xl p-4 flex flex-col gap-5 lg:w-[250px]'>
			<div className='object-cover  object-top hover:scale-105 ease-in duration-300 '>
				<GameCover thumbnail={game.thumbnail} id={game.id}  />


			</div>
			<span className='font-bold '>{game.title}</span>


			<span className='flex gap-4 text-[#777779]'>{game.genre}</span>


			<span className='flex text-[#777779]'>{game.platform}</span>
			<div className='flex justify-between items-center'>

      <img onClick={activeFavorite} className='w-7 cursor-pointer' src={isActive ? '/game-covers/Heart.png' : '/game-covers/HeartEmpty.png' }/>

					<ButtonBuy game={game} />
			</div>
		</div>
	)
}
