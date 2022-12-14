import React from 'react'

import { FaCarCrash} from 'react-icons/fa'
import { GiAncientSword, GiBolterGun, GiPlantsAndAnimals,GiCardRandom, GiBackgammon, GiFangs} from 'react-icons/gi'
import { MdSportsFootball} from 'react-icons/md'
import { FiMousePointer } from 'react-icons/fi'
import { SiBattledotnet } from 'react-icons/si'
import { useDispatch } from 'react-redux'
import { sortedGenres } from '../../Redux/Cart/cartSlice'

const styleCategories = {
	categories:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
	categoriesGenere:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
}



export default function NavCategory({isOpenNav}) {
	const dispatch = useDispatch()


  async function sortedGenresFunc(genres) {
    await dispatch(sortedGenres(genres))
    await dispatch(sortedGenres(''))
    

  }

  
	return (
		<div className={isOpenNav ? 'lg:flex hidden bg-[#313033] bottom-[-100%]  items-center justify-center p-4 mb-4 rounded-2xl ease-in duration-300' : 'lg:fixed bottom-0   hidden bg-[#313033]  items-center justify-center p-4 mb-4 rounded-2xl ease-in duration-300' }>
			<ul className='lg:flex hidden gap-[30px] cursor-pointer'>
				<div className={styleCategories.categories}>
					<GiAncientSword />
					<li onClick={() => sortedGenresFunc('category=mmorpg')}>MMOARPG</li>
				</div>
				<div className={styleCategories.categoriesGenere}>
					<GiBolterGun />
					<li onClick={() => sortedGenresFunc('category=shooter')}>Shooter</li>
				</div>
				<div className={styleCategories.categories}>
					<FiMousePointer />
					<li onClick={() => sortedGenresFunc('category=strategy')}>Strategy</li>
				</div>
				<div className={styleCategories.categories}>
					<GiPlantsAndAnimals />
					<li onClick={() => sortedGenresFunc('category=moba')}>MOBA</li>
				</div>
				<div className={styleCategories.categories}>
					<GiCardRandom />
					<li onClick={() => sortedGenresFunc('category=card')}>Card Game</li>
				</div>
				<div className={styleCategories.categories}>
					<SiBattledotnet />
					<li onClick={() => sortedGenresFunc('category=pvp')}>Battle Royale</li>
				</div>
				<div className={styleCategories.categories}>
					<MdSportsFootball />
					<li onClick={() => sortedGenresFunc('category=sports')}>Sports</li>
				</div>
				<div className={styleCategories.categories}>
					<GiBackgammon />
					<li onClick={() => sortedGenresFunc('category=mmofps')}>MMOFPS</li>
				</div>
				<div className={styleCategories.categories}>
					<FaCarCrash />
					<li onClick={() => sortedGenresFunc('category=racing')}>Racing</li>
				</div>
				<div className={styleCategories.categories}>
					<GiFangs />
					<li onClick={() => sortedGenresFunc('category=fantasy')}>Fantasy</li>
				</div>
			</ul>
		</div>
	)
}
