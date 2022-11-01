import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { searchGame } from '../../Redux/Cart/searchSlice'

const SearchMobile = () => {

	const search = useSelector(state => state.searchSlice.search)
	const dispatch = useDispatch()

	return (
		<div className='justify-center items-center pb-4 md:hidden flex'>
      <AiOutlineSearch size={30}/>
			<input type='text' value={search}
				onChange={e => dispatch(searchGame(e.target.value))} className='rounded-2xl bg-[#777779] text-white  px-4 py-1 w-[100%]  ' />
		</div>
	)
}

export default SearchMobile
