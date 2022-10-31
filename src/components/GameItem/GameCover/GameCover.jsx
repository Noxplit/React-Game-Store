import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addDiscription } from '../../../Redux/Cart/cartSlice';
import './gameCover.css'

export default function GameCover({thumbnail, id}) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addDiscription(id));

  }
  return (
   <Link to='/discription'><div className='game-cover' style={{backgroundImage: `url(${thumbnail})`}} onClick={ handleClick}/></Link>

    
  )
}
