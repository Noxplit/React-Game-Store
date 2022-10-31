import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header';
import GameItemFav from '../../components/GameItem/GameItemFav/GameItemFav'

const Favorite = () => {

  const favorite = useSelector(state => state.favoriteSlice.favorite)
  return (
    <div>
      <Header/>
      
      <div className='flex gap-5'>
      {favorite.map(item => (
        <GameItemFav game={item}/>
      ))}
    </div>
    </div>
  )
}

export default Favorite