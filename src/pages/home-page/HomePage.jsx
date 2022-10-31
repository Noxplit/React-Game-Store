import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../../components/Banner/Banner'
import GamesItem from '../../components/GameItem/GamesItem'
import Header from '../../components/Header'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {BiErrorCircle} from 'react-icons/bi'
import { useState } from 'react'
import { favoriteGame } from '../../Redux/Cart/favoriteSlice'


export default function HomePage({isLoading, error}) {
	// const value = useSelector(state => state.cartSlice.value)
	// const GamesFiltred = GAMES.filter(games =>  games.title.toLowerCase().includes(value.toLowerCase()))
const [isOpenNav, setOpenNav] = useState(false)
const [isOpenSearch, setOpenSearch] = useState(false)
	const itemGame = useSelector(state => state.cartSlice.itemGame)

	return (
		<div  className='relative'>

      <Header setOpenSearch={setOpenSearch} isOpenSearch={isOpenSearch} setOpenNav={setOpenNav} isOpenNav={isOpenNav}/>
			<Banner/>
      { isLoading ? <div className='flex gap-4 justify-center items-center mt-20 text-3xl uppercase'><AiOutlineLoading3Quarters/><div >Loading...</div></div> : 	<div className='grid py-10 gap-10 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-center items-center'>
				{itemGame.map(game => (
					<GamesItem game={game} favoriteGame={favoriteGame} key={game.id} />
				))}
			</div> }
      {error && <div className='flex gap-4 mt-10 justify-center items-center text-3xl uppercase'><BiErrorCircle/><div >Network Error</div></div> }
		
		</div>
	)
}
