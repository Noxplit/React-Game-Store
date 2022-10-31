import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchMobile = ({ isOpenSearch, setOpenSearch }) => {
	return (
		<div className='justify-center items-center pb-4 md:hidden flex'>
      <AiOutlineSearch size={30}/>
			<input type='text' className='rounded-2xl bg-[#777779] text-white  px-4 py-1 w-[100%]  ' />
		</div>
	)
}

export default SearchMobile
