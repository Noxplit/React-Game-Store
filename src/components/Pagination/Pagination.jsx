import React from 'react'
import { useState } from 'react'

const Pagination = ({ countriesPerPage, totalCountries, paginate, setCurrentPage, nextPage, prevPage }) => {
	const pageNumbers = []

  const [index, setIndex] = useState(0)

  function paginateFunc(number,id) {
    paginate(number)
    setIndex(id)
  }


	for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
		pageNumbers.push(i)
	}

  

	return (
		<div>
			<ul className='flex flex-wrap justify-center  gap-1  cursor-pointer'>
				{pageNumbers.map((number, id) => (
					<li key={number} onClick={() => paginateFunc(number, id)} className={index === id ? 'bg-[#e58d27] rounded-lg px-5 py-3 border-2 border-white   ' : 'bg-[#777779] rounded-lg   px-5 py-3  '}>
						<a >{number}</a>
					</li>
				))}
			</ul>
      <div className='flex gap-2 mt-2 justify-center cursor-pointer'>
      <div onClick={prevPage } className='bg-[#777779] rounded-lg active:bg-[#e58d27]    px-5 py-3  '>Prev Page</div>
      <div onClick={nextPage} className='bg-[#777779] rounded-lg active:bg-[#e58d27]   px-5 py-3  '>Next Page</div>
      </div>
		</div>
	)
}

export default Pagination
