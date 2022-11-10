import React, { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import { Discription } from './pages/discription/Discription'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { itemGames } from './Redux/Cart/cartSlice'
import Favorite from './pages/Favorite/Favorite'

function App() {
	const [isLoading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const dispatch = useDispatch()

	const sorted = useSelector(state => state.cartSlice.sorted)
	const sortedGenre = useSelector(state => state.cartSlice.sortedGenre)

	useEffect(() => {
		const options = {
			method: 'GET',
			url: `https://free-to-play-games-database.p.rapidapi.com/api/games?_limit=10&${sortedGenre}${sorted}`,
			headers: {
				'X-RapidAPI-Key': 'e4b4977b58mshe9373b5c1bddf23p1591b0jsnc180c829cc0e',
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
			},
		}

		axios
			.request(options, setLoading(true))
			.then(function (response) {
				dispatch(itemGames(response.data))
				setLoading(false)
			})
			.catch(function () {
				setLoading(false)
				setError(true)
			})
	}, [sorted, sortedGenre])

	return (
		<div className='App p-4'>
			<Routes>
				<Route path='/' element={<HomePage isLoading={isLoading} error={error} />} />
				<Route path='/discription' element={<Discription />} />
				<Route path='/favorite' element={<Favorite />} />
			</Routes>
		</div>
	)
}

export default App
