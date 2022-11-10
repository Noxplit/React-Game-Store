import React from 'react'
import { DiCodrops } from 'react-icons/di'
import { ImCancelCircle } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDiscription } from '../../../Redux/Cart/cartSlice'
import { removeCartItem } from '../../../Redux/Cart/cartSlice'
import { BsFillCartXFill } from 'react-icons/bs'
import { useState } from 'react'
import { buyGameInCart } from '../../../Redux/Cart/cartSlice'
const styleCategories = {
	categories:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] cursor-pointer ',
	categoriesGenere:
		'flex group justify-center items-center gap-2 hover:scale-105 ease-in duration-300 hover:text-[#e58d27] ',
}

const CartMenu = ({ items, setIsCartMenuVisible, isCartMenuVisible }) => {
	const dispatch = useDispatch()
	const handleClick = id => {
		dispatch(addDiscription(id))
	}

	const [buyGame, setBuyGame] = useState(true)

	const handleCancel = () => {
		setIsCartMenuVisible(false)
		setBuyGame(true)
	}

	const buyGameFunc = () => {
		setBuyGame(false)
		dispatch(buyGameInCart([]))
	}

  const totalPrice = items.reduce((abs,game) => abs += Math.abs(game.id - 500),0)

	return (
		<div>
			{isCartMenuVisible && <div className='fixed w-full h-full  z-20 top-0 left-0 bg-black/50' />}
			<div
				className={
					isCartMenuVisible
						? 'fixed w-[100%] h-screen overflow-scroll z-30 top-0 left-0 bg-[rgb(22,26,29)]  duration-300'
						: 'fixed w-[100%] overflow-scroll h-screen z-30 top-0 left-[-100%] bg-[rgb(22,26,29)]  duration-300'
				}>
				<div className='flex justify-center  items-center gap-5  py-10'>
					<div>
						<DiCodrops size={40} />
					</div>
					<div className='text-4xl font-bold '>Game Store</div>
					<div className={styleCategories.categories}>
						<ImCancelCircle onClick={handleCancel} size={30} />
					</div>
				</div>
				{buyGame ? (
					<>
						{' '}
						{items.length > 0 ? (
							<div className='flex flex-col justify-center items-center w-full'>
								<div>
									{items.map((game, id) => (
										<div
											key={game.title}
											className='flex flex-col flex-wrap  justify-around items-center text-xl font-bold gap-3 py-5'>
											<div className='flex justify-center items-center'>
												<div>{`${id + 1}.`}</div>
												<div>{game.title}</div>
												<ImCancelCircle
													onClick={() => dispatch(removeCartItem(game.id))}
													className='ml-5 cursor-pointer hover:scale-105 hover:text-[#e58d27] ease-in duration-300'
													size={30}
												/>
											</div>
											<Link to='/discription'>
												<div onClick={() => handleClick(game.id)}>
													<img
														src={game.thumbnail}
														alt='screenshots'
														className='max-w-[250px] max-h-[250px] rounded-2xl shadow-lg hover:scale-105 cursor-pointer ease-in duration-300'
													/>
                        <div className='text-center text-2 pt-5'>{`Price: ${Math.abs(game.id - 500)}$`}</div>

												</div>
											</Link>
										</div>
									))}
								</div>
                <div className='text-2xl font-bold py-5'>{`Total price: ${totalPrice}$`}</div>
								<button
									onClick={buyGameFunc}
									className='px-[100px] py-4 bg-[#e58d27] rounded-2xl text-black hover:scale-105 ease-in duration-300 '>
									Buy games
								</button>
							</div>
						) : (
							<div className='flex justify-center items-center gap-4'>
								<BsFillCartXFill size={30} />
								<div className='text-4xl text-center'>No game in cart</div>
							</div>
						)}{' '}
					</>
				) : (
					<div className='flex justify-center items-center gap-4'>
						<BsFillCartXFill size={30} />
						<div className='text-4xl text-center'>Your order is accepted</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default CartMenu
