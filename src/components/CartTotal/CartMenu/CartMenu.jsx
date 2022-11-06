import React from 'react'
import { DiCodrops } from 'react-icons/di'
import { ImCancelCircle } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDiscription } from '../../../Redux/Cart/cartSlice'

const styleCategories = {
	categories:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] cursor-pointer ',
	categoriesGenere:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
}

const CartMenu = ({ items, setIsCartMenuVisible, isCartMenuVisible}) => {

  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch(addDiscription(id));
    console.log(id);
  }

	return (
		<div>
			{isCartMenuVisible && <div className='fixed w-full h-full  z-20 top-0 left-0 bg-black/50' />}
			<div
				className={
					isCartMenuVisible
						? 'fixed w-[100%] h-screen overflow-scroll z-30 top-0 left-0 bg-[rgb(22,26,29)]  duration-300'
						: 'fixed w-[100%] overflow-scroll h-screen z-30 top-0 left-[-100%] bg-[rgb(22,26,29)]  duration-300'
				}>
				<div className='flex flex-col justify-center items-center w-full pt-10'>
					<div className='flex  items-center gap-5  mb-5'>
						<div>
							<DiCodrops size={40} />
						</div>
						<div className='text-4xl font-bold '>Game Store</div>
						<div className={styleCategories.categories}>
							<ImCancelCircle onClick={() => setIsCartMenuVisible(false)} size={30} />
						</div>
					</div>
          <div>
            {items.map((game,id) => (
              <div className='flex flex-col flex-wrap  justify-around items-center text-xl font-bold gap-3 py-10'>
              <div className='flex'>
              <div>
                {`${id+1}.`}
              </div>
              <div>
                {game.title}
              </div>
              </div>
              <Link to='/discription'><div onClick={() => handleClick(game.id)}><img  src={game.thumbnail} alt="screenshots" className='max-w-[250px] max-h-[250px] rounded-2xl shadow-lg hover:scale-105 cursor-pointer' /></div></Link>
              </div>
            ))}
          </div>
          <button className='px-[100px] py-4 bg-[#e58d27] rounded-2xl text-black hover:scale-105 ease-in duration-300 my-10'>Buy games</button>
				</div>
			</div>
		</div>
	)
}

export default CartMenu
