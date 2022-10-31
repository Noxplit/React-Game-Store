import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchMobile = ({ isOpenSearch, setOpenSearch }) => {
	return (
		<div className='flex justify-center pb-4'>
      <AiOutlineSearch size={30}/>
			<input type='text' className='rounded-2xl bg-[#777779] text-white  px-4 py-1 w-full' />
		</div>
	)
}

export default SearchMobile
