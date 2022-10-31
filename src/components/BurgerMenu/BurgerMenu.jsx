import React from 'react'
import { DiCodrops } from 'react-icons/di'
import { BiCategoryAlt } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'
import NavCategoryMobile from '../NavCategory/NavCategoryMobile'



const styleCategories = {
	categories:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] cursor-pointer ',
	categoriesGenere:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
}

const BurgerMenu = ({ setOpenMenu, isOpenMenu, clearSorted ,sortedFunc}) => {
	return (
		<div>
			{isOpenMenu && <div className='fixed w-full h-full  z-20 top-0 left-0 bg-[rgb(22,26,29)]' /> }
			<div className={isOpenMenu ? 'fixed w-full h-full z-30 top-0 left-0 bg-[rgb(22,26,29)]  duration-300' : 'fixed w-full h-full z-30 top-0 left-[-100%] bg-[rgb(22,26,29)]  duration-300'}>
				<div className='flex flex-col justify-center items-center w-full pt-10'>

          {/* Main Menu */}

          <div className='flex  items-center gap-5  mb-5'>
            <div><DiCodrops size={40} /></div>
					<div className='text-4xl font-bold '>Game Store</div>
          <div className={styleCategories.categories} onClick={() => setOpenMenu(!isOpenMenu)}><ImCancelCircle size={30}/></div>
          </div>



          {/* Categories  */}


            <NavCategoryMobile setOpenMenu={setOpenMenu} sortedFunc={sortedFunc} clearSorted={clearSorted} isOpenMenu={isOpenMenu}/>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
