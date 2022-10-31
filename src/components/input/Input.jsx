import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fillterCart } from '../../Redux/Cart/cartSlice'

const Input = () => {

  const value  = useSelector(state => state.cartSlice.value)
const dispatch = useDispatch()

  return (
    <div>
       <input value={value} onChange={e => dispatch(fillterCart(e.target.value))}    className=' bg-gray-500 w-150 h-7 rounded-2xl font-bold ml-20' type="text"  placeholder='Искать...'/>

    </div>
  )
}

export default Input