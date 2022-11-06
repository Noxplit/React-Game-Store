import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../CartTotal/CartBlock/CartBlock'
import { DiCodrops } from 'react-icons/di'
import { AiOutlineSearch, AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { MdFavoriteBorder, MdNewReleases, MdFiberNew } from 'react-icons/md'
import { BiCategoryAlt } from 'react-icons/bi'
import { SiPopos } from 'react-icons/si'
import { sortedCart } from '../../Redux/Cart/cartSlice'
import { useDispatch } from 'react-redux'
import { sortedGenres } from '../../Redux/Cart/cartSlice'
import { addDiscription } from '../../Redux/Cart/cartSlice'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { useState } from 'react'
import NavCategory from '../NavCategory/NavCategory'
import SearchMobile from '../Search/SearchMobile'
import Input from '../input/Input'

const styleCategories = {
	categories:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
	categoriesGenere:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
}

export default function Header({ isOpenNav, isOpenSearch, setOpenNav, setOpenSearch }) {

  const [isOpenMenu, setOpenMenu] = useState(false)
const [isOpenSearchMobile, setOpenSearchMobile] = useState(false)
const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)



	const dispatch = useDispatch()

	async function sortedFunc(sort) {
		await dispatch(sortedCart(sort))
		await dispatch(sortedCart(''))
	}

	function clearSorted() {
		dispatch(sortedCart(''))
		dispatch(sortedGenres(''))
		dispatch(addDiscription(''))
	}

	return (
		<div className=''>
			 <BurgerMenu setOpenMenu={setOpenMenu} isOpenMenu={isOpenMenu} isOpenNav={isOpenNav} clearSorted={clearSorted} setOpenNav={setOpenNav} sortedFunc={sortedFunc}/>


			<div className='flex w-full justify-between  pb-4'>
				<div className='flex justify-center items-center gap-4'>
					<DiCodrops  size={30} />
					<Link to='/' className='text-2xl'>
						Game Store
					</Link>
				</div>

				<ul className='lg:flex justify-center items-center  hidden gap-[30px] cursor-pointer'>
					<Link to='/'>
						<div onClick={clearSorted} className={styleCategories.categories}>
							<AiOutlineHome />
							<li>Home</li>
						</div>
					</Link>
					<div className={styleCategories.categoriesGenere}>
						<BiCategoryAlt />
						<li onClick={() => setOpenNav(!isOpenNav)}>Categories</li>
					</div>
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

      

				<div className='flex justify-center items-center gap-4'>
        <div className=' justify-center items-center md:flex hidden'>
      <AiOutlineSearch size={30}/>
<Input/>
		</div>
					<AiOutlineMenu onClick={() => setOpenMenu(!isOpenMenu)} size={30} className='lg:hidden' />
					<Link to='/favorite'><MdFavoriteBorder
						size={30}
						className='flex cursor-pointer  hover:scale-105 ease-in duration-300'
					/></Link>
				
				
					<AiOutlineSearch
						onClick={() => setOpenSearchMobile(!isOpenSearchMobile)}
						size={30}
						className=' cursor-pointer hover:scale-105 ease-in duration-300 sm:hidden  flex '
					/>
          
					<CartBlock setIsCartMenuVisible={setIsCartMenuVisible} isCartMenuVisible={isCartMenuVisible}/>
				</div>

			</div>
      {isOpenNav && <NavCategory isOpenNav={isOpenNav}/> }
     {isOpenSearchMobile && <SearchMobile setOpenSearch={setOpenSearch} isOpenSearch={isOpenSearch} />}
		</div>
	)
}
