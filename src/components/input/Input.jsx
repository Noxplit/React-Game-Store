import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { searchGame } from '../../Redux/Cart/searchSlice'
const Input = () => {
	const search = useSelector(state => state.searchSlice.search)
	const dispatch = useDispatch()


	return (
		<div>
			<input
				type='text'
				value={search}
				onChange={e => dispatch(searchGame(e.target.value))}
				className='rounded-2xl bg-[#777779] text-white  px-4 py-1  '
			/>
		</div>
	)
}

export default Input
