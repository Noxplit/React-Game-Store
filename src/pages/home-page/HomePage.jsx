import React from 'react'
import { useSelector } from 'react-redux'
import Banner from '../../components/Banner/Banner'
import GamesItem from '../../components/GameItem/GamesItem'
import Header from '../../components/Header'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'
import { useState } from 'react'
import { favoriteGame } from '../../Redux/Cart/favoriteSlice'
import Pagination from '../../components/Pagination/Pagination'

export default function HomePage({ isLoading, error }) {

  

	const [isOpenNav, setOpenNav] = useState(false)
	const [isOpenSearch, setOpenSearch] = useState(false)
	const itemGame = useSelector(state => state.cartSlice.itemGame)
	const search = useSelector(state => state.searchSlice.search)

	const filterGame = itemGame.filter(item =>
		item.title.toLowerCase().includes(search.toLowerCase()),
	)

  

  const [currentPage,setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(20)
  const lastCountryIndex =  currentPage *  countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage 
  const currentCountry = filterGame.slice(firstCountryIndex, lastCountryIndex)

  const nextPage = () => {setCurrentPage(prev => prev + 1)}
  const prevPage = () => {setCurrentPage(prev => prev - 1)}

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

	return (
		<div className='relative'>
			<Header
				setOpenSearch={setOpenSearch}
				isOpenSearch={isOpenSearch}
				setOpenNav={setOpenNav}
				isOpenNav={isOpenNav}
        
			/>
			<Banner />
			{isLoading ? (
				<div className='flex gap-4 justify-center items-center mt-20 text-3xl uppercase'>
					<AiOutlineLoading3Quarters />
					<div>Loading...</div>
				</div>
			) : (
				<div className='grid py-10 gap-10 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-center items-center'>
					{currentCountry?.map(game => (
						<GamesItem game={game} favoriteGame={favoriteGame} key={game.id} />
					))}
				</div>
			)}
			{error && (
				<div className='flex gap-4 mt-10 justify-center items-center text-3xl uppercase'>
					<BiErrorCircle />
					<div>Network Error</div>
				</div>
			)}
      <Pagination nextPage={nextPage} prevPage={prevPage} setCurrentPage={setCurrentPage} paginate={paginate} countriesPerPage={countriesPerPage} totalCountries={filterGame.length}/>
		</div>
	)
}
