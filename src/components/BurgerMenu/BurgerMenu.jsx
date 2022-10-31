import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../CartTotal/CartBlock/CartBlock'
import { DiCodrops } from 'react-icons/di'
import { AiOutlineSearch, AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { MdFavoriteBorder, MdNewReleases, MdFiberNew } from 'react-icons/md'
import { BiCategoryAlt } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'
import { SiPopos } from 'react-icons/si'
import { sortedCart } from '../../Redux/Cart/cartSlice'
import { useDispatch } from 'react-redux'
import { sortedGenres } from '../../Redux/Cart/cartSlice'
import { addDiscription } from '../../Redux/Cart/cartSlice'
import NavCategoryMobile from '../NavCategory/NavCategoryMobile'



const styleCategories = {
	categories:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] cursor-pointer ',
	categoriesGenere:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
}

const BurgerMenu = ({isOpenNav, setOpenMenu, isOpenMenu, clearSorted, setOpenNav ,sortedFunc}) => {
	return (
		<div>
			<div className='fixed w-full h-full  z-20 top-0 left-0 bg-[rgb(22,26,29)]' />
			<div className='fixed w-[100%] h-full z-30 top-0 left-0 bg-black/0  duration-300'>
				<div className='flex flex-col justify-center items-center w-full pt-10'>

          {/* Main Menu */}

          <div className='flex  items-center gap-4  mb-20'>
            <div><DiCodrops size={40} /></div>
					<div className='text-4xl font-bold '>Game Store</div>
          <div className={styleCategories.categories} onClick={() => setOpenMenu(!isOpenMenu)}><ImCancelCircle size={30}/></div>
          </div>

          {/* Items */}
          <ul className='flex flex-col justify-center items-center  text-3xl  gap-[30px] cursor-pointer'>
					<Link to='/'>
						<div onClick={clearSorted} className={styleCategories.categories}>
							<AiOutlineHome />
							<li>Home</li>
						</div>
					</Link>
					
					<div className={styleCategories.categories}>
						<MdFiberNew />
						<li onClick={() => sortedFunc('&sort-by=release-date')}>New</li>
					</div>
					<div className={styleCategories.categories}>
						<SiPopos />
						<li onClick={() => sortedFunc('&sort-by=popularity')}>Popular</li>
					</div>
					<div className={styleCategories.categories}>
						<MdNewReleases />
						<li>Promotions and Offers</li>
					</div>
				</ul>

          {/* Categories  */}

        <div className='flex justify-center items-center mt-20 text-3xl gap-[10px] mb-10 '>
						<BiCategoryAlt />

						<div onClick={() => setOpenNav(!isOpenNav)}>Categories:</div>
					</div>
            <NavCategoryMobile setOpenMenu={setOpenMenu} isOpenMenu={isOpenMenu}/>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
